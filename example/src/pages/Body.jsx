import React, { useState, useCallback } from 'react';
import { Canvas, Setup, Draw } from 'p5-react';
import { Body } from '../components/Body';
import { BouncingObject, RandomPathObject } from '../models';
import { SketchWrapper } from '../components/SketchWrapper';

export default function SmileyFacePage() {
    const bouncing = useCallback(
        (p, o) => new BouncingObject(p, o && o.position),
        []
    );
    const random = useCallback(
        (p, o) => new RandomPathObject(p, o && o.position),
        []
    );

    const [model, setModel] = useState(() => bouncing);

    return (
        <SketchWrapper>
            <div>
                <input
                    type="radio"
                    id="bouncing"
                    checked={model === bouncing}
                    onChange={() => setModel(() => bouncing)}
                />
                <label htmlFor="bouncing">Bouncing ball</label>
            </div>
            <div style={{ marginBottom: '.5em' }}>
                <input
                    type="radio"
                    id="random"
                    checked={model === random}
                    onChange={() => setModel(() => random)}
                />
                <label htmlFor="random">Ball moving randomly</label>
            </div>
            <Setup>
                <Canvas width={500} height={500} className="canvas" />
            </Setup>
            <Draw>
                <Body model={model} />
            </Draw>
        </SketchWrapper>
    );
}
