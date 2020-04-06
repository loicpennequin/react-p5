import React, { useRef, useCallback, useContext } from 'react';
import { Command } from './Command';
import { P5RenderContext } from './RenderContext';

export function Canvas({
    width,
    height,
    renderer = 'P2D',
    children,
    ...props
}) {
    const { rootP5Instance: rp } = useContext(P5RenderContext);
    const canvasContainerRef = useRef(null);

    const command = useCallback(() => {
        const canvas = rp.createCanvas(width, height, renderer);
        canvas.parent(canvasContainerRef.current);
    }, [height, renderer, rp, width]);

    return (
        <>
            <div ref={canvasContainerRef} {...props} />
            <Command command={command}>{children}</Command>
        </>
    );
}
