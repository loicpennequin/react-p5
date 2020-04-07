import React from 'react';
import { Circle, Body as P5Body } from 'p5-react';
import { useTheme } from '@material-ui/core/styles';

export function Body({ model }) {
    const theme = useTheme();

    return (
        <>
            <P5Body model={model}>
                {({ position }) => (
                    <Circle
                        x={position.x}
                        y={position.y}
                        size={50}
                        fill={theme.palette.primary.main}
                        noStroke
                    />
                )}
            </P5Body>
        </>
    );
}
