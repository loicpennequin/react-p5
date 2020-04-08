import React from 'react';
import { SketchWrapper } from '../components/SketchWrapper';

import { Circle } from 'p5-react';
import { useTheme } from '@material-ui/core/styles';

const description = `
The \`<Circle>\` component allows you to draw a circle on the screen. 

It is the equivalent of calling \`p5.circle()\`;
`;
const code = `import React from 'react';
import { Circle } from 'p5-react';

function Draw() {
    return (
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
                stroke={theme.palette.primary.main}
                noFill
            />
        </>
    );
};`;
export default function CirclePage() {
    const theme = useTheme();

    return (
        <SketchWrapper
            title="Body"
            description={description}
            code={code}
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
                        stroke={theme.palette.primary.main}
                        noFill
                    />
                </>
            }
        ></SketchWrapper>
    );
}
