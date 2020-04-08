import React, { useCallback } from 'react';
import { Command } from '../Command';
import { handleCommonProps, commonPropTypes } from '../utils/handleCommonProps';
import { handleValueOrFunction } from '../utils/handleValueOrFunction';
import { describe, PropTypes } from 'react-desc';

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

export const PointWithSchema = describe(Point)
    .description(`The \`<Point>\` component allows you to draw a point to the screen. 

It is the equivalent of calling [p5.point()](https://p5js.org/reference/#/p5/point).`);

PointWithSchema.propTypes = {
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).description(
        'The x-coordinate of the shape'
    ).isRequired,
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).description(
        'The y-coordinate of the shape'
    ).isRequired,
    ...commonPropTypes,
};
