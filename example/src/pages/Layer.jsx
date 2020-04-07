import React, { useRef, useCallback } from 'react';
import { Background, Circle, Layer, Line, Command } from 'p5-react';
import { SketchWrapper } from '../components/SketchWrapper';

export default function LayerPage() {
    const lineY = useRef(0);
    const updateLinePosition = useCallback(p => {
        lineY.current++;
        if (lineY.current > p.height) lineY.current = 0;
    }, []);

    return (
        <SketchWrapper
            setup={<Background color={0} />}
            draw={
                <>
                    <Command command={updateLinePosition} />
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
            }
        ></SketchWrapper>
    );
}
