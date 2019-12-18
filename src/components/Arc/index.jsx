import React, { useCallback } from 'react';
import P5 from '../P5';

export default function Arc({
    p,
    x,
    y,
    size,
    start,
    stop,
    fillColor = 0,
    strokeColor = 0,
    noFill,
    noStroke,
    strokeWeight
}) {
    const onRender = useCallback(
        p => {
            if (noFill) p.noFill();
            else if (Array.isArray(fillColor)) p.fill(...fillColor);
            else p.fill(fillColor);

            if (noStroke) p.noStroke();
            else if (Array.isArray(strokeColor)) p.fill(...strokeColor);
            else p.stroke(strokeColor);
            if (strokeWeight) p.strokeWeight(strokeWeight);

            p.arc(x, y, size, size, start, stop);
        },
        [
            noFill,
            fillColor,
            noStroke,
            strokeColor,
            strokeWeight,
            x,
            y,
            size,
            start,
            stop
        ]
    );

    return <P5.Block pInstance={p} onRender={onRender} />;
}
