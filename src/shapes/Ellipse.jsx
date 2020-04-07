import React, { useCallback } from 'react';
import { Command } from '../Command';
import { handleCommonProps } from '../utils/handleCommonProps';
import { handleValueOrFunction } from '../utils/handleValueOrFunction';

export function Ellipse({ p, x, y, width, height, children, ...props }) {
    const command = useCallback(
        p => {
            handleCommonProps(props, p);
            p.ellipse(...handleValueOrFunction(p, x, y, width, height));
        },
        [props, x, y, width, height]
    );
    return (
        <>
            <Command command={command} />
            {children}
        </>
    );
}
