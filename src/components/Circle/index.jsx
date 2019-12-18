import React, { useCallback } from 'react';
import P5 from '../P5';
import handleCommonProps from '../../utils/handleCommonProps';

export default function Circle({ p, x, y, size, ...props }) {
    const onRender = useCallback(
        p => {
            handleCommonProps(props, p);
            p.circle(x, y, size / 2);
        },
        [x, y, size, props]
    );

    return <P5.Block pInstance={p} onRender={onRender} />;
}
