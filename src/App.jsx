import React, { useEffect, useState } from 'react';
import P5, { useP5 } from './components/P5';
import Layer from './components/Layer';
import Mask from './components/Mask';
import Circle from './components/Circle';
import Canvas from './components/Canvas';
import Arc from './components/Arc';
const constants = {
    CANVAS_HEIGHT: 500,
    CANVAS_WIDTH: 500
};

export default function App() {
    const [loop, setLoop] = useState(false);

    return (
        <>
            <button onClick={() => setLoop(loop => !loop)}>
                {loop ? 'Stop' : 'Start'} loop
            </button>
            <P5 canvasClassName="canvas" loop={loop}>
                <P5.Setup>
                    <Canvas
                        width={constants.CANVAS_WIDTH}
                        height={constants.CANVAS_HEIGHT}
                    />
                </P5.Setup>
                <P5.Draw>
                    <SmileyFace />
                </P5.Draw>
            </P5>
        </>
    );
}

function SmileyFace() {
    return (
        <>
            <Circle x={250} y={250} size={350} noStroke fillColor="#ffe680" />
            <Eyes />
            <Smile />
        </>
    );
}

function Eyes() {
    const { defineDrawBlock } = useP5();
    const [leftEyeX, setLeftEyeX] = useState(155);
    const [rightEyeX, setRightEyeX] = useState(295);

    useEffect(() => {
        const clear = defineDrawBlock(p => {
            setLeftEyeX(p.map(p.mouseX, 0, p.width, 155, 175));
            setRightEyeX(p.map(p.mouseX, 0, p.width, 295, 315));
        });

        return clear;
    }, [defineDrawBlock]);

    return (
        <>
            <Layer>
                {layer => (
                    <>
                        <Circle
                            p={layer}
                            x={180}
                            y={200}
                            size={75}
                            noStroke
                            fillColor="white"
                        />
                        <Circle
                            p={layer}
                            x={leftEyeX}
                            y={190}
                            size={45}
                            noStroke
                            fillColor="black"
                        />
                        <Circle
                            p={layer}
                            x={320}
                            y={200}
                            size={75}
                            noStroke
                            fillColor="white"
                        />
                        <Circle
                            p={layer}
                            x={rightEyeX}
                            y={190}
                            size={45}
                            noStroke
                            fillColor="black"
                        />
                        <Mask target={layer}>
                            {pMask => (
                                <>
                                    <Circle
                                        p={pMask}
                                        x={180}
                                        y={200}
                                        size={75}
                                        noStroke
                                    />
                                    <Circle
                                        p={pMask}
                                        x={320}
                                        y={200}
                                        size={75}
                                        noStroke
                                    />
                                </>
                            )}
                        </Mask>
                    </>
                )}
            </Layer>
        </>
    );
}

function Smile() {
    const { p5Instance } = useP5();

    if (!p5Instance) return null;

    return (
        <Layer>
            {layer => (
                <>
                    <Arc
                        p={layer}
                        x={250}
                        y={275}
                        size={260}
                        noStroke
                        fillColor="#947"
                        start={p5Instance.radians(0)}
                        stop={p5Instance.radians(180)}
                    />

                    <Circle
                        p={layer}
                        x={200}
                        y={380}
                        size={170}
                        noStroke
                        fillColor="#fad"
                    />
                    <Mask target={layer}>
                        {pMask => (
                            <Arc
                                p={pMask}
                                x={250}
                                y={275}
                                size={260}
                                noStroke
                                start={p5Instance.radians(0)}
                                stop={p5Instance.radians(180)}
                            />
                        )}
                    </Mask>
                </>
            )}
        </Layer>
    );
}
