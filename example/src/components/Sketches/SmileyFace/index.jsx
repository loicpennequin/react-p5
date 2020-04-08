import React from 'react';
import { Eye } from './Eye';
import { Circle, Layer, Mask } from 'p5-react';
import { Smile } from './Smile';

const HEAD_SIZE = 300;
const EYE_SIZE = 80;
const LEFT_EYE_POSITION = {
    x: p => p.width / 2 - HEAD_SIZE / 4,
    y: 135,
};

const RIGHT_EYE_POSITION = {
    x: p => p.width / 2 + HEAD_SIZE / 4,
    y: 135,
};
const SMILE_POSITION = {
    x: p => p.width / 2,
    y: p => p.height / 2 + 10,
};

const Eyes = ({ showPupils }) => (
    <>
        <Eye
            size={EYE_SIZE}
            position={LEFT_EYE_POSITION}
            showPupil={showPupils}
        />
        <Eye
            size={EYE_SIZE}
            position={RIGHT_EYE_POSITION}
            showPupil={showPupils}
        />
    </>
);

export function SmileyFace() {
    return (
        <Layer>
            <Circle
                x={p => p.width / 2}
                y={p => p.height / 2}
                size={HEAD_SIZE}
                fill={[245, 225, 120]}
                noStroke
            />
            <Layer>
                <Mask>
                    <Eyes showPupils={false} />
                </Mask>
                <Eyes showPupils={true} />
            </Layer>
            <Smile position={SMILE_POSITION} />
        </Layer>
    );
}
