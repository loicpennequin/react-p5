import React, { useCallback } from 'react';
import { Command } from '../Command';
import { handleCommonProps } from '../utils/handleCommonProps';
import { handleValueOrFunction } from '../utils/handleValueOrFunction';

export function Circle({ p, x, y, size, children, ...props }) {
    const command = useCallback(
        p => {
            handleCommonProps(props, p);
            p.circle(...handleValueOrFunction(p, x, y, size));
        },
        [props, x, y, size]
    );

    return (
        <>
            <Command command={command} />
            {children}
        </>
    );
}
