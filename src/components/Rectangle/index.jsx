import React, { useCallback } from 'react';
import P5 from '../P5';
import handleCommonProps from '../../utils/handleCommonProps';

export default function Rectangle({ p, x, y, height, width, ...props }) {
    const onRender = useCallback(
        p => {
            handleCommonProps(props, p);
            p.rectangle(x, y, width, height);
        },
        [x, y, height, width, props]
    );

    return <P5.Block pInstance={p} onRender={onRender} />;
}
