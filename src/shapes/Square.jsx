import React, { useCallback } from 'react';
import { Command } from '../Command';
import { handleCommonProps, commonPropTypes } from '../utils/handleCommonProps';
import { handleValueOrFunction } from '../utils/handleValueOrFunction';
import PropTypes from 'prop-types';

/**
 * The `<Square>` component allows you to draw a square to the screen.
 * It is the equivalent of calling [p5.square()](https://p5js.org/reference/#/p5/square).`;
 */
export function Square({ x, y, size, children, ...props }) {
    const command = useCallback(
        p => {
            handleCommonProps(props, p);
            p.square(...handleValueOrFunction(p, x, y, size));
        },
        [props, x, y, size]
    );

    return (
        <>
            <Command command={command} />
            {children}
        </>
    );
}

Square.displayName = 'Square';
Square.propTypes = {
    /** The x-coordinate of the shape */
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
    /** The y-coordinate of the shape */
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
    /** The size of the shape in pixels */
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
    ...commonPropTypes,
};
