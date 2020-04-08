import React, { useRef, useCallback, useContext } from 'react';
import { Command } from './Command';
import { P5RenderContext } from './RenderContext';
import { describe, PropTypes } from 'react-desc';

function CanvasComponent({
    width,
    height,
    renderer = 'P2D',
    children,
    canvasClassName,
    canvasStyle,
    ...props
}) {
    const { rootP5Instance: rp } = useContext(P5RenderContext);
    const canvasContainerRef = useRef(null);
    const command = useCallback(() => {
        const canvas = rp.createCanvas(width, height, renderer);
        canvas.elt.className = canvasClassName;
        canvas.elt.style = canvasStyle;
        canvas.parent(canvasContainerRef.current);
    }, [canvasClassName, canvasStyle, height, renderer, rp, width]);

    return (
        <>
            <div ref={canvasContainerRef} {...props} />
            <Command command={command}>{children}</Command>
        </>
    );
}
CanvasComponent.displayName = 'Canvas';

export const Canvas = describe(CanvasComponent)
    .description(`The \`<Canvas>\` component will create a new canvas for you to draw things on.

It is the equivalent of calling [p5.createCanvas()](https://p5js.org/reference/#/p5/createCanvas)
`);

Canvas.propTypes = {
    width: PropTypes.oneOfType([PropTypes.func, PropTypes.number]).description(
        'The width of the canvas in pixels'
    ).isRequired,
    height: PropTypes.oneOfType([PropTypes.func, PropTypes.number]).description(
        'The width of the canvas in pixels'
    ).isRequired,
    renderer: PropTypes.oneOf('P2D', 'WEBGL').description(
        'The renderer to be used for the canvas. Defaults to P2D'
    ),
    canvasClassName: PropTypes.string.description(
        'The classname passed to created the canvas DOM element'
    ),
    canvasStyle: PropTypes.object.description(
        'The stylepassed to the createdcanvas DOM element'
    ),
};
