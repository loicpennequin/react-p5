import React, {
    useState,
    useEffect,
    useRef,
    useContext,
    useCallback,
} from 'react';
import { Command } from './Command';
import { P5Context } from './P5';
import { P5RenderContext } from './RenderContext';
import { handleValueOrFunction } from './utils/handleValueOrFunction';
import PropTypes from 'prop-types';

const EMPTY_ARRAY = Object.freeze([]);

/**
 * Todo
 */
export function Layer({
    autoClear = true,
    children = null,
    blendMode = 'BLEND',
    opacity,
    filters = EMPTY_ARRAY,
    isStatic = false,
    applyFunction,
    x = 0,
    y = 0,
    width = p => p.width,
    height = p => p.height,
    id,
}) {
    const [layerImage, setLayerImage] = useState(null);
    const pg = useRef(null);
    const applyCallbacks = useRef([]);
    const ctx = useContext(P5RenderContext);
    const globalCtx = useContext(P5Context);

    useEffect(() => {
        if (isStatic) {
            setLayerImage(null);
        }
    }, [children, opacity, blendMode, isStatic]);

    useEffect(
        () => () => {
            ctx.getRootState().layers = ctx
                .getRootState()
                .layers.filter(layer => layer.__id !== id);
        },
        [ctx, id]
    );

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
            p.image(
                content,
                handleValueOrFunction(p, x),
                handleValueOrFunction(p, y),
                handleValueOrFunction(p, width),
                handleValueOrFunction(p, height)
            );
        };

        if (layerImage && isStatic) {
            doApply(layerImage);
            return;
        }
        if (!pg.current || pg.current.width <= 0 || pg.current.height <= 0) {
            return;
        }

        pg.current.mouseX = p.mouseX + handleValueOrFunction(p, x);
        pg.current.mouseY = p.mouseY + handleValueOrFunction(p, y);
        pg.current.pmouseX = p.pmouseX + handleValueOrFunction(p, x);
        pg.current.pmouseY = p.pmouseY + handleValueOrFunction(p, y);

        let contentToApply = pg.current;

        if (applyCallbacks.current.length > 0) {
            const copyParams = [0, 0, pg.current.width, pg.current.height];
            contentToApply = p.createImage(pg.current.width, pg.current.height);
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
        x,
        y,
        width,
        height,
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
                    handleValueOrFunction(ctx.rootP5Instance, width),
                    handleValueOrFunction(ctx.rootP5Instance, height)
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
            pg.current.__isStatic = isStatic;
            pg.current.__id = id;
            ctx.getRootState().layers.push(pg.current);
        },
        [ctx, height, id, isStatic, width]
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
Layer.displayName = 'Layer';
Layer.propTypes = {
    /** todo */
    autoClear: PropTypes.bool,
    /** todo */
    blendMode: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    /** todo */
    opacity: PropTypes.number,
    /** todo */
    filters: PropTypes.array,
    /** todo */
    isStatic: PropTypes.bool,
    /** todo */
    applyFunction: PropTypes.func,
    /** todo */
    id: PropTypes.string,
    /** The x-coordinate of the layer */
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    /** The y-coordinate of the layer */
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    /** The width of the layer */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    /** The height of the layer */
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    /** The size of the shape in pixels */
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
};
