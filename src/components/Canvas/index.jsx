import React, { useCallback } from 'react';
import P5, { useP5 } from '../P5';

export default function Canvas({ width, height, background }) {
    const { debug } = useP5();
    const onRender = useCallback(
        p => {
            if (debug) console.log('creating canvas on ', p.__id);
            p.createCanvas(width, height);

            if (background !== undefined) {
                p.background(background);
            }
        },
        [debug, width, height, background]
    );

    return <P5.Block onRender={onRender} />;
}
