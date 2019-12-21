import React, { useCallback } from 'react';
import P5, { useP5 } from '../P5';
import log from '../../utils/debugLogger';
import handleCommonProps from '../../utils/handleCommonProps';

export default function Circle({ p, x, y, size, ...props }) {
    const { debug } = useP5();
    const onRender = useCallback(
        p => {
            handleCommonProps(props, p);
            if (debug) {
                log(`drawing circle on ${p.__id}`, {
                    canvas: p,
                    x,
                    y,
                    size,
                    ...props
                });
            }
            p.circle(x, y, size / 2);
        },
        [props, debug, x, y, size]
    );
    return <P5.Block pInstance={p} onRender={onRender} />;
}
