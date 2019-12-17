import React from 'react';
import P5, { useP5 } from './components/P5';
import Circle from './components/Circle';
import Canvas from './components/Canvas';
import Arc from './components/Arc';
const constants = {
    CANVAS_HEIGHT: 500,
    CANVAS_WIDTH: 500
};

export default function App() {
    return (
        <P5 canvasClassName="canvas">
            <P5.Setup>
                <Canvas
                    width={constants.CANVAS_WIDTH}
                    height={constants.CANVAS_HEIGHT}
                />
            </P5.Setup>
            <P5.Draw>
                <Circle x={250} y={250} size={350} noStroke fillColor="#fd8" />

                <Circle x={180} y={200} size={35} noStroke fillColor="black" />
                <Circle x={320} y={200} size={35} noStroke fillColor="black" />

                <Smile />
            </P5.Draw>
        </P5>
    );
}

function Smile() {
    const { p5Instance } = useP5();

    if (!p5Instance) return null;

    return (
        <Arc
            x={250}
            y={250}
            size={270}
            noStroke
            fillColor="#f8a"
            start={p5Instance.radians(0)}
            stop={p5Instance.radians(180)}
        />
    );
}
