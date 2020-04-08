import React, { useCallback } from 'react';
import { Command } from '../Command';
import { handleCommonProps, commonPropTypes } from '../utils/handleCommonProps';
import { handleValueOrFunction } from '../utils/handleValueOrFunction';
import { describe, PropTypes } from 'react-desc';

function RectangleComponent({ x, y, width, height, children, ...props }) {
    const command = useCallback(
        p => {
            handleCommonProps(props, p);
            p.rect(...handleValueOrFunction(p, x, y, width, height));
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
RectangleComponent.displayName = 'Rectangle';

export const Rectangle = describe(RectangleComponent)
    .description(`The \`<Rectangle>\` component allows you to draw an rectangle to the screen. 

It is the equivalent of calling [p5.arc()](https://p5js.org/reference/#/p5/rectangle).`);

Rectangle.propTypes = {
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
