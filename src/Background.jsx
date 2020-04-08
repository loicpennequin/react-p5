import React, { useCallback } from 'react';
import { Command } from './Command';
import { handleValueOrFunction } from './utils/handleValueOrFunction';

export function Background({ color, children, ...props }) {
    const command = useCallback(
        p => {
            p.background(handleValueOrFunction(p, color));
        },
        [color]
    );
    return (
        <>
            <Command command={command} />
            {children}
        </>
    );
}
