import React, { useState, useRef, useMemo } from 'react';
import {
    P5,
    Canvas,
    Setup,
    Draw,
    Background,
    Circle,
    Layer,
    Line,
    useDraw,
} from 'p5-react';

const SketchDraw = () => {
    const lineY = useRef(0);
    useDraw(p => {
        lineY.current++;
        if (lineY.current > p.height) lineY.current = 0;
    });

    return (
        <>
            <Background color={0} />
            <Line
                from={p => [0, lineY.current]}
                to={p => [p.width, lineY.current]}
                stroke={[255, 0, 0]}
                strokeWeight={2}
            />
            <Layer id="layer" autoClear={false}>
                <Circle
                    x={p => p.mouseX}
                    y={p => p.mouseY}
                    size={20}
                    fill={255}
                    noStroke
                />
            </Layer>
        </>
    );
};
export default function LayerPage() {
    const [debug, setDebug] = useState(false);
    const canvasOptions = useMemo(
        () => ({
            clearOnDraw: true,
            debug,
            // frameRate: 1,
        }),
        [debug]
    );
    const toggleDebug = () => setDebug(d => !d);

    return (
        <>
            <div>
                <button onClick={toggleDebug}>
                    DEBUG: {debug ? 'ON' : 'OFF'}
                </button>
            </div>
            <P5 options={canvasOptions} className="canvas">
                <Setup>
                    <Canvas width={500} height={500} className="canvas" />
                    <Background color={0} />
                </Setup>
                <Draw>
                    <SketchDraw />
                </Draw>
            </P5>
        </>
    );
}
