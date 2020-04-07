import React, { useState, useMemo } from 'react';
import { P5, Canvas, Setup, Draw, Background, Circle, Layer } from 'p5-react';

export default function SmileyFacePage() {
    const [debug, setDebug] = useState(false);
    const canvasOptions = useMemo(
        () => ({
            clearOnDraw: false,
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
                    <Background color={0} />
                    <Layer id="layer" autoClear={false}>
                        <Circle
                            x={p => p.mouseX}
                            y={p => p.mouseY}
                            size={100}
                            fill={255}
                            noStroke
                        />
                    </Layer>
                </Draw>
            </P5>
        </>
    );
}
