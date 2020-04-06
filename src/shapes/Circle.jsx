import React, { useCallback, useContext } from 'react';
import { Command } from '../Command';
import { P5RenderContext } from '../RenderContext';
import { handleCommonProps } from '../utils/handleCommonProps';
import { handleValueOrFunction } from '../utils/handleValueOrFunction';

export function Circle({ p, x, y, size, children, ...props }) {
    const { rootP5Instance: rp } = useContext(P5RenderContext);
    const command = useCallback(
        p => {
            handleCommonProps(props, p);
            p.circle(...handleValueOrFunction(rp, x, y, size));
        },
        [props, x, rp, y, size]
    );

    return (
        <>
            <Command command={command} />
            {children}
        </>
    );
}
