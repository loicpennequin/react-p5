import React, { useRef, useCallback, useContext } from 'react';
import { P5RenderContext } from './RenderContext';
import { Layer } from './Layer';
import { describe, PropTypes } from 'react-desc';

function MaskComponent({ id, children, ...props }) {
    const ctx = useContext(P5RenderContext);
    const mask = useRef(null);

    const applyFunction = useCallback(
        layer => {
            const apply = (parentLayer, parentImg) => {
                parentImg.mask(layer);
            };
            if (mask.current) mask.current();
            mask.current = ctx.p5Instance.on('apply', apply);
        },
        [ctx.p5Instance]
    );

    return (
        <Layer id={id} applyFunction={applyFunction} {...props}>
            {children}
        </Layer>
    );
}
MaskComponent.displayName = 'Mask';

export const Mask = describe(MaskComponent).description('todo');

Mask.propTypes = {
    autoClear: PropTypes.bool.description('todo'),
    blendMode: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
    ]).description('todo'),
    opacity: PropTypes.number.description('todo'),
    filters: PropTypes.array.description('todo'),
    isStatic: PropTypes.bool.description('todo'),
    applyFunction: PropTypes.func.description('todo'),
    id: PropTypes.string.description('todo'),
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).description(
        'The x-coordinate of the shape'
    ).isRequired,
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).description(
        'The y-coordinate of the shape'
    ).isRequired,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).description(
        'The size of the shape in pixels'
    ).isRequired,
};
