import React, { forwardRef, useCallback } from 'react';
import P5, { useP5 } from '../P5';
import log from '../../utils/debugLogger';
import handleCommonProps from '../../utils/handleCommonProps';
import getBlockConfig from '../../utils/getBlockConfig';

function Circle({ p, x, y, size, ...props }, ref) {
    const { debug } = useP5();
    const onRender = useCallback(
        p => {
            const config = getBlockConfig({ x, y, size, ...props }, ref);
            handleCommonProps(props, p);
            if (debug) {
                log(`drawing circle on ${p.__id}`, {
                    'canvas id': p.__id,
                    ...config
                });
            }
            p.circle(config.x, config.y, config.size / 2);
        },
        [x, y, size, props, ref, debug]
    );
    return <P5.Block pInstance={p} onRender={onRender} />;
}

export default forwardRef(Circle);
