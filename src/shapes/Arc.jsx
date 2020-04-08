import React, { useCallback } from 'react';
import { Command } from '../Command';
import { handleCommonProps, commonPropTypes } from '../utils/handleCommonProps';
import { handleValueOrFunction } from '../utils/handleValueOrFunction';
import { describe, PropTypes } from 'react-desc';

function ArcComponent({
    x,
    y,
    height,
    width,
    start,
    stop,
    children,
    ...props
}) {
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
ArcComponent.displayName = 'Arc';

export const Arc = describe(ArcComponent)
    .description(`The \`<Arc>\` component allows you to draw an arc to the screen. 

It is the equivalent of calling [p5.arc()](https://p5js.org/reference/#/p5/arc).`);

Arc.propTypes = {
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
    start: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).description(
        'The angle to start the arc'
    ).isRequired,
    stop: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).description(
        'The angle to stop the arc'
    ).isRequired,
    ...commonPropTypes,
};
