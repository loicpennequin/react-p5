import React from 'react';
import P5 from './components/P5';
import Canvas from './components/Canvas';
import SmileyFace from './SmileyFace';

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
                <SmileyFace />
            </P5.Draw>
        </P5>
    );
}
