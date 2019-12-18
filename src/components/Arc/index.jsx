import React, { useCallback } from 'react';
import handleCommonProps from '../../utils/handleCommonProps';
import P5, { useP5 } from '../P5';

export default function Arc({ p, x, y, size, start, stop, ...props }) {
    const { debug } = useP5();

    const onRender = useCallback(
        p => {
            handleCommonProps(props, p);
            console.log('drawing arc', props.fillColor);
            p.arc(x, y, size, size, start, stop);
        },
        [x, y, size, start, stop, props]
    );

    return <P5.Block pInstance={p} onRender={onRender} />;
}
