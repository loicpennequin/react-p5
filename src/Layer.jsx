import React, {
    useState,
    useEffect,
    useRef,
    useContext,
    useCallback,
} from 'react';
import { Command } from './Command';
import { P5RenderContext } from './RenderContext';

const EMPTY_ARRAY = Object.freeze([]);

export function Layer({
    autoClear = true,
    children = null,
    blendMode = 'BLEND',
    opacity,
    filters = EMPTY_ARRAY,
    isStatic = false,
    applyFunction,
    id,
}) {
    const [layerImage, setLayerImage] = useState(null);
    const pg = useRef(null);
    const applyCallbacks = useRef([]);
    const ctx = useContext(P5RenderContext);

    useEffect(() => {
        if (isStatic) {
            setLayerImage(null);
        }
    }, [children, opacity, blendMode, isStatic]);

    const api = {
        ...ctx,
        get p5Instance() {
            return pg.current;
        },
    };

    const applyLayer = useCallback(() => {
        const p = ctx.p5Instance;
        const doApply = content => {
            p.blendMode(p[blendMode]);
            // only tint if needed because it is a costly operation
            if (opacity) {
                p.tint(255, opacity);
            }
            p.image(content, 0, 0, p.width, p.height);
        };

        if (layerImage && isStatic) {
            doApply(layerImage);
            return;
        }
        if (!pg.current || pg.current.width <= 0 || pg.current.height <= 0) {
            return;
        }
        let contentToApply = pg.current;

        if (applyCallbacks.current.length > 0) {
            const copyParams = [0, 0, p.width, p.height];
            contentToApply = p.createImage(p.width, p.height);
            contentToApply.copy(pg.current, ...copyParams, ...copyParams);
            applyCallbacks.current.forEach(cb =>
                cb(pg.current, contentToApply)
            );
        }

        if (applyFunction) applyFunction(pg.current);
        else doApply(contentToApply);

        if (isStatic) {
            setLayerImage(contentToApply);
        }
    }, [
        ctx.p5Instance,
        layerImage,
        isStatic,
        applyFunction,
        blendMode,
        opacity,
    ]);

    const applyFilters = useCallback(() => {
        if (!pg.current) return;
        filters.forEach(filter => {
            if (Array.isArray(filter)) {
                pg.current.filter(...filter);
            } else {
                pg.current.filter(filter);
            }
        });
    }, [filters]);

    const applyAutoClear = useCallback(() => {
        if (!pg.current) return;
        pg.current.clear();
    }, []);

    const createLayer = useCallback(
        p => {
            if (!pg.current) {
                pg.current = ctx.rootP5Instance.createGraphics(
                    ctx.rootP5Instance.width,
                    ctx.rootP5Instance.height
                );
                pg.current.on = (event, cb) => {
                    switch (event) {
                        case 'apply':
                            applyCallbacks.current.push(cb);
                            return () => {
                                applyCallbacks.current.splice(
                                    applyCallbacks.current.indexOf(cb),
                                    1
                                );
                            };
                        default:
                            console.error('Unknow layer event', event);
                    }
                };
            }
            pg.current.__isLayer = true;
            pg.current.__id = id;
        },
        [ctx.rootP5Instance, id]
    );

    return (
        <P5RenderContext.Provider value={api}>
            <>
                {!layerImage && <Command command={createLayer} />}
                {!layerImage && autoClear && (
                    <Command command={applyAutoClear} />
                )}
                {!layerImage && children}
                {!layerImage && filters.length > 0 && (
                    <Command command={applyFilters} />
                )}
                <Command command={applyLayer} />
            </>
        </P5RenderContext.Provider>
    );
}
