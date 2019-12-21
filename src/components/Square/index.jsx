import React, { useCallback } from 'react';
import P5, { useP5 } from '../P5';
import log from '../../utils/debugLogger';
import handleCommonProps from '../../utils/handleCommonProps';

export default function Square({ p, x = 0, y = 0, size, ...props }) {
    const { debug } = useP5();
    const onRender = useCallback(
        p => {
            handleCommonProps(props, p);
            if (debug) {
                log(`drawing square on ${p.__id}`, {
                    canvas: p,
                    x,
                    y,
                    size,
                    ...props
                });
            }
            p.square(x, y, size);
        },
        [props, debug, x, y, size]
    );
    return <P5.Block pInstance={p} onRender={onRender} />;
}
