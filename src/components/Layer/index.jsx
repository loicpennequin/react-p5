import React, { useRef, useCallback } from 'react';
import { Block, useP5 } from '../P5';

export default function Layer({
    children,
    x,
    y,
    width,
    height,
    blendMode = 'BLEND',
    opacity = 255,
    autoApply = true
}) {
    const layer = useRef();
    const beforeApplyCallbacks = useRef([]);
    const { debug } = useP5();
    const updateLayer = useCallback(newLayer => {
        if (layer.current) {
            layer.current.remove();
        }
        layer.current = newLayer;
    }, []);

    const onRender = useCallback(
        p => {
            const layer = p.createGraphics(p.width, p.height);
            layer.__id = Math.random();
            layer.onBeforeApply = cb => {
                beforeApplyCallbacks.current.push(cb);
            };

            layer.apply = ({
                x = 0,
                y = 0,
                width = p.width,
                height = p.height
            }) => {
                if (debug) console.log('apply layer', layer.__id);
                const copyProps = [0, 0, layer.width, layer.height];
                const img = p.createImage(width, height);
                img.copy(layer, ...copyProps, ...copyProps);

                beforeApplyCallbacks.current.forEach(cb => {
                    cb(layer, img);
                });

                p.blendMode(p[blendMode]);
                p.tint(255, opacity);
                p.image(img, x, y, width, height);

                beforeApplyCallbacks.current = [];
            };

            updateLayer(layer);
        },
        [blendMode, debug, opacity, updateLayer]
    );

    const apply = useCallback(() => {
        // eslint-disable-next-line no-unused-expressions
        layer.current?.apply?.({ x, y, width, height });
        // eslint-disable-next-line
    }, [x, y, width, height, children]);

    return (
        <>
            <Block onRender={onRender} />
            {children(layer)}
            {autoApply && <Block onRender={apply} />}
        </>
    );
}
