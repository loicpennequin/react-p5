import React from 'react';
import { SketchWrapper } from '../components/SketchWrapper';

import { Circle } from 'p5-react';
import { useTheme } from '@material-ui/core/styles';

export default function CirclePage() {
    const theme = useTheme();

    return (
        <SketchWrapper
            description={Circle.toMarkdown()}
            githubLink="https://github.com/loicpennequin/react-p5/blob/master/src/shapes/Circle.jsx"
            draw={
                <>
                    <Circle
                        x={p => p.width / 2}
                        y={p => p.height / 2}
                        size={100}
                        fill={theme.palette.primary.main}
                        noStroke
                    />
                    <Circle
                        x={p => p.width / 2}
                        y={p => p.height / 2}
                        size={200}
                        stroke={0}
                        noFill
                    />
                </>
            }
        ></SketchWrapper>
    );
}
