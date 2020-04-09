import React, { useCallback } from 'react';
import { Command } from '../Command';
import { handleCommonProps, commonPropTypes } from '../utils/handleCommonProps';
import { handleValueOrFunction } from '../utils/handleValueOrFunction';
import PropTypes from 'prop-types';

/**
 * The `<Point>` component allows you to draw a point to the screen.
 * It is the equivalent of calling [p5.point()](https://p5js.org/reference/#/p5/point).`;
 */
export function Point({ x, y, children, ...props }) {
    const command = useCallback(
        p => {
            handleCommonProps(props, p);
            p.point(...handleValueOrFunction(p, x, y));
        },
        [props, x, y]
    );
    return (
        <>
            <Command command={command} />
            {children}
        </>
    );
}
Point.displayName = 'Point';
Point.propTypes = {
    /** The x-coordinate of the shape */
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
    /** The y-coordinate of the shape */
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
    ...commonPropTypes,
};
