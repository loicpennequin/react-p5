import React, { useCallback } from 'react';
import P5, { useP5 } from '../P5';
import log from '../../utils/debugLogger';
import handleCommonProps from '../../utils/handleCommonProps';

export default function Square({
    p,
    x = 0,
    y = 0,
    width,
    height,
    colors = ['black', 'white'],
    ...props
}) {
    const { debug } = useP5();
    const onRender = useCallback(
        p => {
            handleCommonProps(props, p);
            if (debug) {
                log(`drawing gradient on ${p.__id}`, {
                    'canvas id': p.__id,
                    x,
                    y,
                    width,
                    height,
                    colors,
                    ...props
                });
            }

            const gradientXEnd = x + width;
            const gradientYEnd = y + height;
            const gradientColors = colors.map(c => p.color(c));
            p.noFill();

            for (var _y = y; _y < gradientYEnd; _y++) {
                var inter = p.map(_y, 0, gradientYEnd, 0, 1);
                var lineColor = p.lerpColor(
                    gradientColors[0],
                    gradientColors[1],
                    inter
                );
                p.stroke(lineColor);
                p.line(x, _y, gradientXEnd, _y);
            }
        },
        [props, debug, y, height, colors, x, width]
    );
    return <P5.Block pInstance={p} onRender={onRender} />;
}
