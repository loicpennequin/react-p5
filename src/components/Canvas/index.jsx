import React, { useCallback } from 'react';
import P5 from '../P5';

export default function Canvas({ width, height, background }) {
    const onRender = useCallback(
        p => {
            p.createCanvas(width, height);

            if (background !== undefined) {
                p.background(background);
            }
        },
        [width, height, background]
    );

    return <P5.Block onRender={onRender} />;
}
