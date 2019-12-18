import React, { useState } from 'react';
import P5 from './components/P5';
import Canvas from './components/Canvas';
import SmileyFace from './SmileyFace';

const constants = {
    CANVAS_HEIGHT: 500,
    CANVAS_WIDTH: 500
};

export default function App() {
    const [loop, setLoop] = useState(true);

    return (
        <>
            <button onClick={() => setLoop(loop => !loop)}>
                {loop ? 'Stop' : 'Start'} loop
            </button>
            <P5 canvasClassName="canvas" frameRate={1} loop={loop}>
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
