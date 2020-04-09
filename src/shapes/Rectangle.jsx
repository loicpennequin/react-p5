import React, { useCallback } from 'react';
import { Command } from '../Command';
import { handleCommonProps, commonPropTypes } from '../utils/handleCommonProps';
import { handleValueOrFunction } from '../utils/handleValueOrFunction';
import PropTypes from 'prop-types';

/**
 * The `<Rectangle>` component allows you to draw a rectangle to the screen.
 * It is the equivalent of calling [p5.rectangle()](https://p5js.org/reference/#/p5/rectangle).`;
 */
export function Rectangle({ x, y, width, height, children, ...props }) {
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
Rectangle.displayName = 'Rectangle';
Rectangle.propTypes = {
    /** The x-coordinate of the shape */
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
    /** The Y-coordinate of the shape */
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
    /** The width of the shape in pixels */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
    /** The height of the shape in pixels */
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
    ...commonPropTypes,
};
