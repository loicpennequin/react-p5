import React, { useEffect, useState } from 'react';
import { useP5 } from './components/P5';
import Layer from './components/Layer';
import Mask from './components/Mask';
import Circle from './components/Circle';
import Arc from './components/Arc';

export default function SmileyFace() {
    return (
        <>
            <Circle x={250} y={250} size={350} noStroke fillColor="#ffe680" />
            <Eyes />
            <Smile />
        </>
    );
}

function Eye({ layer, mask, initialX }) {
    const { defineDrawBlock } = useP5();
    const [eyeX, setEyeX] = useState(initialX);

    useEffect(() => {
        const clear = defineDrawBlock(p => {
            setEyeX(p.map(p.mouseX, 0, p.width, initialX, initialX + 25));
        });

        return clear;
    }, [defineDrawBlock, initialX]);
    return (
        <>
            <Circle
                p={layer}
                x={initialX + 10}
                y={200}
                size={75}
                noStroke
                fillColor="white"
            />
            <Circle
                p={layer}
                x={eyeX}
                y={190}
                size={45}
                noStroke
                fillColor="black"
            />
            <Circle p={mask} x={initialX + 10} y={200} size={75} noStroke />
        </>
    );
}
function Eyes() {
    return (
        <>
            <Layer id="eyes">
                {layer => (
                    <Mask target={layer} id="eyes mask">
                        {pMask => (
                            <>
                                <Eye
                                    layer={layer}
                                    mask={pMask}
                                    initialX={165}
                                />
                                <Eye
                                    layer={layer}
                                    mask={pMask}
                                    initialX={305}
                                />
                            </>
                        )}
                    </Mask>
                )}
            </Layer>
        </>
    );
}

function Smile() {
    const { p5Instance } = useP5();
    return (
        <Layer id="smile">
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
                    <Mask target={layer} id="smile mask">
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