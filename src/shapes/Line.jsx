import React, { useCallback } from 'react';
import { Command } from '../Command';
import { handleCommonProps } from '../utils/handleCommonProps';
import { handleValueOrFunction } from '../utils/handleValueOrFunction';

export function Line({ p, from, to, children, ...props }) {
    const command = useCallback(
        p => {
            handleCommonProps(props, p);
            p.line(...handleValueOrFunction(p, from, to).flat());
        },
        [props, from, to]
    );
    return (
        <>
            <Command command={command} />
            {children}
        </>
    );
}
