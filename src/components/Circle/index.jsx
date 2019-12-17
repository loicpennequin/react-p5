import React, { useCallback, useRef } from 'react';
import P5 from '../P5';

export default function Circle({ render, x, y, size, fillColor }) {
    const color = useRef(null);

    const onRender = useCallback((p) => {
        if (fillColor === undefined) {
            if (!color.current) {
                p.colorMode(p.HSB, 360, 100, 100);
                color.current = [p.random(0, 360), p.random(0, 100), p.random(0, 100)]
            }
            p.fill(...color.current)
        } else {
            p.fill(fillColor)
        }
        p.ellipse(x, y, size, size);
    }, [fillColor, x, y, size]);
    
    return <P5.Block onRender={onRender} />;
}
