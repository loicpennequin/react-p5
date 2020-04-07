import React, { useCallback } from 'react';
import { Command } from '../Command';
import { handleCommonProps } from '../utils/handleCommonProps';
import { handleValueOrFunction } from '../utils/handleValueOrFunction';

export function Arc({
    p,
    x,
    y,
    height,
    width,
    start,
    stop,
    children,
    ...props
}) {
    const command = useCallback(
        p => {
            handleCommonProps(props, p);
            p.arc(
                ...handleValueOrFunction(p, x, y, width, height, start, stop)
            );
        },
        [props, x, y, width, height, start, stop]
    );
    return (
        <>
            <Command command={command} />
            {children}
        </>
    );
}
