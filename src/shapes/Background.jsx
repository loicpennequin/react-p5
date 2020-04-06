import React, { useCallback, useContext } from 'react';
import { Command } from '../Command';
import { P5RenderContext } from '../RenderContext';
import { handleValueOrFunction } from '../utils/handleValueOrFunction';

export function Background({ color, children, ...props }) {
    const { rootP5Instance } = useContext(P5RenderContext);
    const command = useCallback(
        p => {
            p.background(
                ...handleValueOrFunction(rootP5Instance, color).flat()
            );
        },
        [color, rootP5Instance]
    );
    return (
        <>
            <Command command={command} />
            {children}
        </>
    );
}
