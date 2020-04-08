import React, { useCallback } from 'react';
import { Command } from '../Command';
import { handleCommonProps, commonPropTypes } from '../utils/handleCommonProps';
import { handleValueOrFunction } from '../utils/handleValueOrFunction';
import { describe, PropTypes } from 'react-desc';

function CircleComponent({ x, y, size, children, ...props }) {
    const command = useCallback(
        p => {
            handleCommonProps(props, p);
            p.circle(...handleValueOrFunction(p, x, y, size));
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
CircleComponent.displayName = 'Circle';

export const Circle = describe(CircleComponent)
    .description(`The \`<Circle>\` component allows you to draw a circle to the screen. 

It is the equivalent of calling [p5.circle()](https://p5js.org/reference/#/p5/circle).`);

Circle.propTypes = {
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).description(
        'The x-coordinate of the shape'
    ).isRequired,
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).description(
        'The y-coordinate of the shape'
    ).isRequired,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).description(
        'The size of the shape in pixels'
    ).isRequired,
    ...commonPropTypes,
};
