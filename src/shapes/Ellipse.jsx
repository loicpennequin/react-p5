import React, { useCallback, useContext } from 'react';
import { Command } from '../Command';
import { P5RenderContext } from '../RenderContext';
import { handleCommonProps } from '../utils/handleCommonProps';
import { handleValueOrFunction } from '../utils/handleValueOrFunction';

export function Ellipse({ p, x, y, width, height, children, ...props }) {
    const { rootP5Instance: rp } = useContext(P5RenderContext);
    const command = useCallback(
        p => {
            handleCommonProps(props, p);
            p.ellipse(...handleValueOrFunction(rp, x, y, width, height));
        },
        [props, rp, x, y, width, height]
    );
    return (
        <>
            <Command command={command} />
            {children}
        </>
    );
}
