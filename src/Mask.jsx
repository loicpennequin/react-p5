import React, { useRef, useCallback, useContext } from 'react';
import { P5RenderContext } from './RenderContext';
import { Layer } from './Layer';
import PropTypes from 'prop-types';

/**
 * Todo
 */
export function Mask({ id, children, ...props }) {
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
Mask.displayName = 'Mask';
Mask.propTypes = Layer.propTypes;
