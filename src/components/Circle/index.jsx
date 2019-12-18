import React, { useCallback } from 'react';
import P5, { useP5 } from '../P5';
import handleCommonProps from '../../utils/handleCommonProps';

export default function Circle({ p, x, y, size, ...props }) {
    const { debug } = useP5();
    const onRender = useCallback(
        p => {
            handleCommonProps(props, p);
            console.log('drawing circle', props.fillColor);
            p.circle(x, y, size / 2);
        },
        [props, x, y, size]
    );

    return <P5.Block pInstance={p} onRender={onRender} />;
}
