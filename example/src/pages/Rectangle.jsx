import docs from '../assets/docs.generated.json';
import React from 'react';
import { SketchWrapper } from '../components/SketchWrapper';
import { Rectangle } from 'p5-react';
import { useTheme } from '@material-ui/core/styles';

export default function RectanglePage() {
    const theme = useTheme();

    return (
        <SketchWrapper
            description={docs.Rectangle}
            githubLink="https://github.com/loicpennequin/react-p5/blob/master/src/shapes/Rectangle.jsx"
            draw={
                <>
                    <Rectangle
                        x={p => p.width / 2}
                        y={p => p.height / 2}
                        width={100}
                        height={200}
                        fill={theme.palette.primary.main}
                        noStroke
                    />
                    <Rectangle
                        x={p => p.width / 2}
                        y={p => p.height / 2}
                        width={200}
                        height={100}
                        stroke={0}
                        noFill
                    />
                </>
            }
        ></SketchWrapper>
    );
}
