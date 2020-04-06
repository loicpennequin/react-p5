import React, { useMemo } from 'react';
import { Circle } from 'p5-react';

const generateCircleContraint = (p, radius, position) => {
    const circle = p.createVector(position.x, position.y);
    const result = p.createVector(p.mouseX, p.mouseY);
    const isInBounds = p.dist(result.x, result.y, circle.x, circle.y) < radius;

    if (!isInBounds) {
        result.sub(circle);
        result.setMag(radius);
        result.add(circle);
    }
    return result;
};

export function Eye({ position = { x: 0, y: 0 }, size = 100, showPupil }) {
    const EYEBALL_SIZE = size;
    const PUPIL_SIZE = size / 3;

    const handlePupilPosition = useMemo(() => {
        const getConstraint = p => {
            let { x, y } = position;
            if (typeof x === 'function') x = x(p);
            if (typeof y === 'function') y = y(p);
            return generateCircleContraint(
                p,
                EYEBALL_SIZE / 2,
                p.createVector(x, y)
            );
        };

        return {
            x: p => getConstraint(p).x,
            y: p => getConstraint(p).y,
        };
    }, [EYEBALL_SIZE, position]);
    return (
        <>
            <Circle {...position} size={EYEBALL_SIZE} fill={255} noStroke />
            {showPupil && (
                <Circle
                    {...handlePupilPosition}
                    size={PUPIL_SIZE}
                    fill={0}
                    noStroke
                />
            )}
        </>
    );
}
