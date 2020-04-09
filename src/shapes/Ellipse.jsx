import React, { useCallback } from 'react';
import { Command } from '../Command';
import { handleCommonProps, commonPropTypes } from '../utils/handleCommonProps';
import { handleValueOrFunction } from '../utils/handleValueOrFunction';
import { describe, PropTypes } from 'react-desc';

function EllipseComponent({ x, y, width, height, children, ...props }) {
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
EllipseComponent.displayName = 'Ellipse';

export const Ellipse = describe(EllipseComponent)
    .description(`The \`<Ellipse>\` component allows you to draw an ellipse to the screen. 

It is the equivalent of calling [p5.ellipse()](https://p5js.org/reference/#/p5/ellipse).`);

Ellipse.propTypes = {
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).description(
        'The x-coordinate of the shape'
    ).isRequired,
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).description(
        'The y-coordinate of the shape'
    ).isRequired,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).description(
        'The width of the shape in pixels'
    ).isRequired,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).description(
        'The width of the shape in pixels'
    ).isRequired,
    ...commonPropTypes,
};