import React, { useState, useMemo } from 'react';
import { P5, Canvas, Setup, Draw, LinearGradient } from 'p5-react';
import { SmileyFace } from '../components/SmileyFace';

export default function SmileyFacePage() {
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
            <button onClick={toggleDebug}>DEBUG: {debug ? 'ON' : 'OFF'}</button>
            <P5 options={canvasOptions} className="canvas">
                <Setup>
                    <Canvas width={500} height={500} className="canvas" />
                </Setup>
                <Draw>
                    <LinearGradient
                        colors={[
                            [100, 200, 255],
                            p => p.map(p.mouseY, 0, p.height, 255, 0),
                            [255, 200, 255],
                        ]}
                        angleMode={p => p.DEGREES}
                        angle={p =>
                            p.constrain(
                                p.map(p.mouseX, 0, p.width, 0, 360),
                                0,
                                360
                            )
                        }
                    />
                    <SmileyFace />
                </Draw>
            </P5>
        </>
    );
}
