import React, { useCallback, useContext, useRef } from 'react';
import { P5Context } from './P5';
import { Command } from './Command';

export function Debug() {
    const ctx = useContext(P5Context);
    const frameRateHistory = useRef([]);

    const displayDebugInfo = useCallback(
        p => {
            p.push();
            p.fill(0, 100);
            p.noStroke();
            p.rect(0, 0, 185, 100);

            p.fill(255);
            p.textFont('Courier');
            p.textSize(12);
            p.textLeading(18);
            const fr = Math.round(p.frameRate());
            const avgFr =
                frameRateHistory.current.reduce(
                    (total, curr) => total + curr,
                    0
                ) / frameRateHistory.current.length;
            frameRateHistory.current.push(fr);
            if (fr > 200) fr.shift();
            const text = `Current frame rate: ${fr}
Average frame rate: ${Math.round(avgFr)}
Pixel density: ${p.pixelDensity()}
Setup commands: ${ctx.getRootState().setup.length}
Draw commands: ${ctx.getRootState().draw.length}
        `;
            p.text(text, 8, 18);
            p.pop();
        },
        [ctx]
    );

    return <Command command={displayDebugInfo} />;
}
