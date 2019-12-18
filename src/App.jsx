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
    return (
        <P5 canvasClassName="canvas" frameRate={6}>
            <P5.Setup>
                <Canvas
                    width={constants.CANVAS_WIDTH}
                    height={constants.CANVAS_HEIGHT}
                />
            </P5.Setup>
            <P5.Draw>
                <SmileyFace/>
            </P5.Draw>
        </P5>
    );
}

function SmileyFace() {
    return (
        <>
            {/* <Circle x={250} y={250} size={350} noStroke fillColor="#ffe680" /> */}
            <Eyes />
            {/* <Smile /> */}
        </>
    )
}

function Eyes() {
    const { defineDrawBlock } = useP5();
    const [leftEyeX, setLeftEyeX] = useState(0);
    const [rightEyeX, setRightEyeX] = useState(310);

    useEffect(() => {
        const clear = defineDrawBlock(p => {
            setLeftEyeX(x => x+1)
            // setLeftEyeX(p.map(p.mouseX, 0, p.width, 170, 220));
            // setRightEyeX(p.map(p.mouseX, 0, p.width, 310, 360));
        })
    
            return clear;
    }, [defineDrawBlock])
    
    return (
        <>
            <Layer>
                {layer => (
                    <>
                        {/* <Circle p={layer} x={180} y={200} size={50} noStroke fillColor="white" /> */}
                        <Circle p={layer} x={leftEyeX} y={190} size={35} noStroke fillColor="black" />
                        
                        {/* <Circle p={layer} x={320} y={200} size={50} noStroke fillColor="white" /> */}
                        {/* <Circle p={layer} x={rightEyeX} y={190} size={35} noStroke fillColor="black" /> */}
                        {/* <Mask target={layer}>
                            {pMask => (
                                <>
                                    <Circle p={pMask} x={180} y={200} size={50} noStroke />
                                    <Circle p={pMask} x={320} y={200} size={50} noStroke />
                                </>
                            )}
                        </Mask> */}
                    </>
                )}
            </Layer>
        </>
    )
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
