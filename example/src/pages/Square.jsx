import docs from '../assets/docs.generated.json';
import React from 'react';
import { SketchWrapper } from '../components/SketchWrapper';
import { Square } from 'p5-react';
import { useTheme } from '@material-ui/core/styles';

export default function SquarePage() {
    const theme = useTheme();

    return (
        <SketchWrapper
            description={docs.Square}
            githubLink="https://github.com/loicpennequin/react-p5/blob/master/src/shapes/Square.jsx"
            draw={
                <>
                    <Square
                        x={p => p.width / 2}
                        y={p => p.height / 2}
                        size={100}
                        fill={theme.palette.primary.main}
                        noStroke
                    />
                    <Square
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
