import React, { useCallback, useContext } from 'react';
import { Command } from '../Command';
import { P5RenderContext } from '../RenderContext';
import { handleCommonProps } from '../utils/handleCommonProps';
import { handleValueOrFunction } from '../utils/handleValueOrFunction';

export function Line({ p, from, to, children, ...props }) {
    const { rootP5Instance: rp } = useContext(P5RenderContext);
    const command = useCallback(
        p => {
            handleCommonProps(props, p);
            p.line(...handleValueOrFunction(rp, from, to).flat());
        },
        [props, rp, from, to]
    );
    return (
        <>
            <Command command={command} />
            {children}
        </>
    );
}
