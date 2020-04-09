import React, { useRef, useCallback, useContext } from 'react';
import { Command } from './Command';
import { P5RenderContext } from './RenderContext';
import PropTypes from 'prop-types';

/**
 * The <Canvas> component will create a new canvas for you to draw things on.
 * It is the equivalent of calling [p5.createCanvas()](https://p5js.org/reference/#/p5/createCanvas)
 */
export function Canvas({
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
Canvas.displayName = 'Canvas';
Canvas.propTypes = {
    /** The width of the canvas */
    width: PropTypes.oneOfType([PropTypes.func, PropTypes.number]).isRequired,
    /** The height of the canvas */
    height: PropTypes.oneOfType([PropTypes.func, PropTypes.number]).isRequired,
    /** The renderer to use. Defaults to `P2D` */
    renderer: PropTypes.oneOf(['P2D', 'WEBGL']),
    /** todo  */
    canvasClassName: PropTypes.string,
    /** todo  */
    canvasStyle: PropTypes.object,
};
