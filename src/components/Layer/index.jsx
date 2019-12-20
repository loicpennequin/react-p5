import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Block, useP5 } from '../P5';
import uuid from 'uuid';

export default function Layer({
    children,
    x,
    y,
    width,
    height,
    blendMode = 'BLEND',
    opacity = 255,
    id,
    autoClear = true,
    autoApply = true
}) {
    const { p5Instance, debug } = useP5();
    const createGraphics = useCallback((p) => {
        const pg = p.createGraphics(p.width, p.height)
        pg.__id = id || uuid();
        
        pg.onBeforeApply = cb => {
            beforeApplyCallbacks.current.push(cb);
        };

        pg.apply = ({
            x = 0,
            y = 0,
            width = p.width,
            height = p.height
        }) => {
            if (pg.width <= 0 || pg.height <= 0) return;
            const img = p.createImage(width, height);
            const copyProps = [0, 0, width, height];
            img.copy(pg, ...copyProps, ...copyProps);

            beforeApplyCallbacks.current.forEach(cb => {
                cb(pg, img);
            });

            p.blendMode(p[blendMode]);
            p.tint(255, opacity);
            p.image(img, x, y, width, height);

            beforeApplyCallbacks.current = [];
        };

        return pg;
    }, [blendMode, opacity, id]);

    const [layer, setLayer] = useState(createGraphics(p5Instance));
    const beforeApplyCallbacks = useRef([]);

    useEffect(() => {
        const pg = createGraphics(p5Instance);
        setLayer(layer => {
            layer.remove();
            return pg;
        });
    }, [p5Instance, createGraphics]);

    const apply = useCallback(() => {
        // eslint-disable-next-line no-unused-expressions
        layer.apply({ x, y, width, height });
    }, [x, y, width, height, layer]);
    
    const clear = useCallback(() => {
        layer.clear();
    }, [layer]);
    return (
        <>
            {autoClear && <Block onRender={clear} />}
            {children(layer)}
            {autoApply && <Block onRender={apply} />}
        </>
    );
}
