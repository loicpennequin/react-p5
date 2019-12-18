import React, { useRef, useCallback } from 'react';
import { Block } from '../P5';

export default function Layer({ children, x, y, width, height, autoApply = true }) {
    const layer = useRef();
    const beforeApplyCallbacks = useRef([]);

    const updateLayer = useCallback((newLayer) => {
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

            layer.apply = ({ x = 0, y = 0, width = p.width, height = p.height }) => {
                const img = p.createImage(width, height);
                img.copy(layer, 0, 0, layer.width, layer.height, 0, 0, layer.width, layer.height)

                beforeApplyCallbacks.current.forEach(cb => {
                    cb(layer, img);
                });
                p.image(layer, x, y, width, height);
                beforeApplyCallbacks.current = [];
            }
            updateLayer(layer)
        },
        [updateLayer]
    );

    const apply = useCallback(() => {
        // eslint-disable-next-line no-unused-expressions
        layer.current?.apply?.({ x, y, width, height });
    }, [x, y, width, height]);
    
    return (
        <>
            <Block onRender={onRender} />
            {children(layer)}
            {autoApply && <Block onRender={apply} />}
        </>
    )
}