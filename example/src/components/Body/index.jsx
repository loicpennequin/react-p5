import React from 'react';
import { Circle, Body as P5Body } from 'p5-react';

export function Body({ model }) {
    return (
        <>
            <P5Body model={model}>
                {({ position }) => (
                    <Circle
                        x={position.x}
                        y={position.y}
                        size={50}
                        fill={[255, 0, 0]}
                        noStroke
                    />
                )}
            </P5Body>
        </>
    );
}
