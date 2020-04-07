import React from 'react';
import { Canvas, Setup, Draw, LinearGradient } from 'p5-react';
import { SmileyFace } from '../components/SmileyFace';
import { SketchWrapper } from '../components/SketchWrapper';

export default function SmileyFacePage() {
    return (
        <SketchWrapper>
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
                        p.constrain(p.map(p.mouseX, 0, p.width, 0, 360), 0, 360)
                    }
                />
                <SmileyFace />
            </Draw>
        </SketchWrapper>
    );
}
