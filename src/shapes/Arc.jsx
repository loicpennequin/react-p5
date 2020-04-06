import React, { useCallback, useContext } from 'react';
import { Command } from '../Command';
import { P5RenderContext } from '../RenderContext';
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
    const { rootP5Instance: rp } = useContext(P5RenderContext);
    const command = useCallback(
        p => {
            handleCommonProps(props, p);
            p.arc(
                ...handleValueOrFunction(rp, x, y, width, height, start, stop)
            );
        },
        [props, rp, x, y, width, height, start, stop]
    );
    return (
        <>
            <Command command={command} />
            {children}
        </>
    );
}
