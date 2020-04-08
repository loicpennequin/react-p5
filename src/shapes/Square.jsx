import React, { useCallback } from 'react';
import { Command } from '../Command';
import { handleCommonProps, commonPropTypes } from '../utils/handleCommonProps';
import { handleValueOrFunction } from '../utils/handleValueOrFunction';
import { describe, PropTypes } from 'react-desc';

function SquareComponent({ x, y, size, children, ...props }) {
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

SquareComponent.displayName = 'Square';

export const Square = describe(SquareComponent)
    .description(`The \`<Square>\` component allows you to draw a square to the screen. 

It is the equivalent of calling [p5.square()](https://p5js.org/reference/#/p5/square).`);

Square.propTypes = {
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
