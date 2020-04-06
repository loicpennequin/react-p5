import React, { useCallback, useContext } from 'react';
import { Command } from '../Command';
import { P5RenderContext } from '../RenderContext';
import { handleCommonProps } from '../utils/handleCommonProps';
import { handleValueOrFunction } from '../utils/handleValueOrFunction';

export function Point({ p, x, y, children, ...props }) {
    const { rootP5Instance: rp } = useContext(P5RenderContext);
    const command = useCallback(
        p => {
            handleCommonProps(props, p);
            p.point(...handleValueOrFunction(rp, x, y));
        },
        [props, rp, x, y]
    );
    return (
        <>
            <Command command={command} />
            {children}
        </>
    );
}
