import React, { useCallback } from 'react';
import { Command } from '../Command';
import { handleCommonProps, commonPropTypes } from '../utils/handleCommonProps';
import { handleValueOrFunction } from '../utils/handleValueOrFunction';
import { describe, PropTypes } from 'react-desc';

function LineComponent({ from, to, children, ...props }) {
    const command = useCallback(
        p => {
            handleCommonProps(props, p);
            p.line(...handleValueOrFunction(p, from, to).flat());
        },
        [props, from, to]
    );
    return (
        <>
            <Command command={command} />
            {children}
        </>
    );
}
LineComponent.displayName = 'Line';

export const Line = describe(LineComponent)
    .description(`The \`<Line>\` component allows you to draw a line to the screen. 

It is the equivalent of calling [p5.line()](https://p5js.org/reference/#/p5/line).`);

Line.propTypes = {
    from: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).description(
        'An array of two numbers contaiing the x and y coordinates for the start of the line'
    ).isRequired,
    to: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).description(
        'An array of two numbers contaiing the x and y coordinates for the end of the line'
    ).isRequired,
    ...commonPropTypes,
};
