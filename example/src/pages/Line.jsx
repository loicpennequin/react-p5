import docs from '../assets/docs.generated.json';
import React from 'react';
import { SketchWrapper } from '../components/SketchWrapper';
import { Line } from 'p5-react';
import { useTheme } from '@material-ui/core/styles';

export default function LinePage() {
    const theme = useTheme();

    return (
        <SketchWrapper
            description={docs.Line}
            githubLink="https://github.com/loicpennequin/react-p5/blob/master/src/shapes/Line.jsx"
            draw={
                <>
                    <Line
                        from={[50, 50]}
                        to={p => [p.mouseX, p.mouseY]}
                        strokeWeight={3}
                        stroke={theme.palette.primary.main}
                    />
                </>
            }
        ></SketchWrapper>
    );
}
