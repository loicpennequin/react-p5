import React, { useCallback, useContext, useRef } from 'react';
import { P5Context } from './P5';
import { Command } from './Command';
import { PushPop } from './PushPop';

export function Debug() {
    const ctx = useContext(P5Context);
    const frameRateHistory = useRef([]);

    const displayDebugInfo = useCallback(
        p => {
            p.fill(0, 80);
            p.noStroke();
            p.rect(0, 0, 185, 95);

            p.fill(255);
            p.textFont('Courier');
            p.textLeading(20);
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
Setup commands: ${ctx.getCommands().setup.length}
Draw commands: ${ctx.getCommands().draw.length}
        `;
            p.text(text, 8, 18);
        },
        [ctx]
    );

    return (
        <PushPop>
            <Command command={displayDebugInfo} />
        </PushPop>
    );
}
