import React, { useCallback } from 'react';
import { Command } from '../Command';
import { handleCommonProps } from '../utils/handleCommonProps';
import { handleValueOrFunction } from '../utils/handleValueOrFunction';

export function Point({ p, x, y, children, ...props }) {
    const command = useCallback(
        p => {
            handleCommonProps(props, p);
            p.point(...handleValueOrFunction(p, x, y));
        },
        [props, x, y]
    );
    return (
        <>
            <Command command={command} />
            {children}
        </>
    );
}
