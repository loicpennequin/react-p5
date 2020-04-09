import React, { useCallback, useContext } from 'react';
import { Command } from './Command';
import { P5RenderContext } from './RenderContext';
import { Rectangle } from './shapes/Rectangle';
import { PushPop } from './PushPop';
import { handleCommonProps, commonPropTypes } from './utils/handleCommonProps';
import { handleValueOrFunction } from './utils/handleValueOrFunction';
import p5 from 'p5';
import PropTypes from 'prop-types';

const FullCanvasRectangle = () => (
    <Rectangle
        x={0}
        y={0}
        width={p => p.width}
        height={p => p.height}
        noStroke
    />
);

/**
 * Todo
 */
export function LinearGradient({
    x = 0,
    y = 0,
    width,
    height,
    colors = ['black', 'white'],
    angle,
    angleMode,
    children,
    ...props
}) {
    const { rootP5Instance: rp } = useContext(P5RenderContext);

    const command = useCallback(
        p => {
            handleCommonProps(props, p);
            const params = {
                x: handleValueOrFunction(rp, x),
                y: handleValueOrFunction(rp, y),
                width: handleValueOrFunction(rp, width) || p.width,
                height: handleValueOrFunction(rp, height) || p.height,
                angle: handleValueOrFunction(rp, angle) || 0,
                angleMode: handleValueOrFunction(rp, angleMode) || p.RADIANS,
                colors: handleValueOrFunction(rp, ...colors),
            };

            if (params.angleMode !== p.RADIANS) {
                params.angle = p.radians(params.angle);
            }
            p.push();
            p.angleMode(p.DEGREES);
            let angleInDegrees = p.degrees(params.angle) % 360;
            let endVectorAngle = p.degrees(params.angle) % 180;

            if (endVectorAngle > 45 && endVectorAngle <= 90) {
                endVectorAngle = 90 - endVectorAngle;
            } else if (endVectorAngle > 90 && endVectorAngle <= 135) {
                endVectorAngle -= 90;
            } else if (endVectorAngle > 135 && endVectorAngle <= 180) {
                endVectorAngle = 90 - (endVectorAngle - 90);
            }

            const startVector = p.createVector(params.x, params.y);
            const endVector = p5.Vector.fromAngle(params.angle);

            endVector.setMag(params.width / p.sin(90 - endVectorAngle));
            if (angleInDegrees > 270) {
                startVector.y += params.height;
                endVector.y += params.height;
            } else if (angleInDegrees > 180) {
                startVector.x += params.width;
                endVector.x += params.width;
                startVector.y += params.height;
                endVector.y += params.height;
            } else if (angleInDegrees > 90) {
                startVector.x += params.width;
                endVector.x += params.width;
            }
            p.pop();
            const gradient = p.drawingContext.createLinearGradient(
                startVector.x,
                startVector.y,
                params.x + endVector.x,
                params.y + endVector.y
            );
            params.colors.forEach((color, i) => {
                const stop = i / (params.colors.length - 1);
                gradient.addColorStop(stop, p.color(color).toString());
            });
            p.drawingContext.fillStyle = gradient;

            // UNCOMMENT TO DEBUG
            // p.push();
            // p.rect(0, 0, p.width, p.height);
            // p.fill(0);
            // p.text(`angle: ${Math.round(p.degrees(params.angle))}`, 15, 15);
            // p.noFill();
            // p.stroke(128);
            // p.rect(params.x, params.y, params.width, params.height);
            // p.rectMode(p.CORNERS);
            // p.stroke(255);
            // p.line(
            //     startVector.x,
            //     startVector.y,
            //     params.x + endVector.x,
            //     params.y + endVector.y
            // );
            // p.pop();
        },
        [props, rp, x, y, width, height, angle, angleMode, colors]
    );

    return (
        <PushPop>
            <Command command={command} />
            {children || <FullCanvasRectangle />}
        </PushPop>
    );
}

LinearGradient.displayName = 'LinearGradient';
LinearGradient.propTypes = {
    /** The x-coordinate of the shape */
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
    /** The Y-coordinate of the shape */
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
    /** The width of the shape in pixels */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
    /** The height of the shape in pixels */
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
    /** Todo */
    colors: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
    /** Todo */
    angle: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
    ...commonPropTypes,
};
