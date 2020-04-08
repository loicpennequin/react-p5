import React, { useMemo } from 'react';
import { Layer, Mask, Arc, Circle } from 'p5-react';

const Mouth = ({ position }) => (
    <Arc
        {...position}
        width={230}
        height={230}
        fill="#947"
        start={p => p.radians(0)}
        stop={p => p.radians(180)}
        noStroke
    />
);

export function Smile({ position }) {
    const tonguePosition = useMemo(
        p => ({
            x: p => {
                let { x } = position;
                if (typeof x === 'function') x = x(p);
                return x - 50;
            },
            y: p => {
                let { y } = position;
                if (typeof y === 'function') y = y(p);
                return y + 100;
            },
        }),
        [position]
    );
    return (
        <Layer isStatic id="smile">
            <Mouth position={position} />
            <Circle {...tonguePosition} size={150} fill="#fad" noStroke />
            <Mask id="smile mask">
                <Mouth position={position} />
            </Mask>
        </Layer>
    );
}
