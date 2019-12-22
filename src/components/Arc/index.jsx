import React, { useCallback } from 'react';
import handleCommonProps from '../../utils/handleCommonProps';
import log from '../../utils/debugLogger';
import P5, { useP5 } from '../P5';

export default function Arc({ p, x = 0, y = 0, size, start, stop, ...props }) {
    const { debug } = useP5();
    const onRender = useCallback(
        p => {
            handleCommonProps(props, p);
            if (debug) {
                log(`drawing arc on ${p.__id}`, {
                    'canvas id': p.__id,
                    x,
                    y,
                    size,
                    start,
                    stop,
                    ...props
                });
            }

            p.arc(x, y, size, size, start, stop);
        },
        [props, debug, x, y, size, start, stop]
    );
    return <P5.Block pInstance={p} onRender={onRender} />;
}
