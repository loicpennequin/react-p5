import React from 'react';
import { SketchWrapper } from '../components/SketchWrapper';

import { Point } from 'p5-react';
import { useTheme } from '@material-ui/core/styles';

export default function PointPage() {
    const theme = useTheme();

    return (
        <SketchWrapper
            description={Point.toMarkdown()}
            githubLink="https://github.com/loicpennequin/react-p5/blob/master/src/shapes/Point.jsx"
            draw={
                <>
                    <Point
                        x={100}
                        y={100}
                        strokeWeight={5}
                        fill={theme.palette.primary.main}
                    />
                    <Point
                        x={p => p.width - 100}
                        y={100}
                        strokeWeight={5}
                        fill={theme.palette.primary.main}
                    />
                    <Point
                        x={p => p.width - 100}
                        y={p => p.height - 100}
                        strokeWeight={5}
                        fill={theme.palette.primary.main}
                    />
                    <Point
                        x={100}
                        y={p => p.height - 100}
                        strokeWeight={5}
                        fill={theme.palette.primary.main}
                    />
                </>
            }
        ></SketchWrapper>
    );
}
