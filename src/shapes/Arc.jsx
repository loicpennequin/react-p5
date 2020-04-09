import React, { useCallback } from 'react';
import { Command } from '../Command';
import { handleCommonProps, commonPropTypes } from '../utils/handleCommonProps';
import { handleValueOrFunction } from '../utils/handleValueOrFunction';
import PropTypes from 'prop-types';

/**
 * The `<Arc>` component allows you to draw a arc to the screen.
 * It is the equivalent of calling [p5.arc()](https://p5js.org/reference/#/p5/arc).`;
 */
export function Arc({ x, y, height, width, start, stop, children, ...props }) {
    const command = useCallback(
        p => {
            handleCommonProps(props, p);
            p.arc(
                ...handleValueOrFunction(p, x, y, width, height, start, stop)
            );
        },
        [props, x, y, width, height, start, stop]
    );
    return (
        <>
            <Command command={command} />
            {children}
        </>
    );
}
Arc.displayName = 'Arc';
Arc.propTypes = {
    /** The x-coordinate of the shape */
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
    /** The Y-coordinate of the shape */
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
    /** The width of the shape in pixels */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
    /** The height of the shape in pixels */
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
    /** The angle to start the arc */
    start: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
    /** The angle to stop the arc */
    stop: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
    ...commonPropTypes,
};
