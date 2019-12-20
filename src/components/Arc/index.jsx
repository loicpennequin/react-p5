import React, { useCallback } from 'react';
import handleCommonProps from '../../utils/handleCommonProps';
import P5 from '../P5';

export default function Arc({ p, x, y, size, start, stop, ...props }) {
    const onRender = useCallback(
        p => {
            handleCommonProps(props, p);
            p.arc(x, y, size, size, start, stop);
        },
        [x, y, size, start, stop, props]
    );
    return <P5.Block pInstance={p} onRender={onRender} />;
}
