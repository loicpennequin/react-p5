import React, { useState, useCallback, useMemo } from 'react';
import { P5, Canvas, Setup, Draw } from 'p5-react';
import { Body } from '../components/Body';
import { BouncingObject, RandomPathObject } from '../models';

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
    const bouncing = useCallback(
        (p, o) => new BouncingObject(p, o && o.position),
        []
    );
    const random = useCallback(
        (p, o) => new RandomPathObject(p, o && o.position),
        []
    );

    const [model, setModel] = useState(() => bouncing);
    const toggleDebug = () => setDebug(d => !d);

    return (
        <>
            <div>
                <button onClick={toggleDebug}>
                    DEBUG: {debug ? 'ON' : 'OFF'}
                </button>
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
            </div>
            <P5 options={canvasOptions} className="canvas">
                <Setup>
                    <Canvas width={500} height={500} className="canvas" />
                </Setup>
                <Draw>
                    <Body model={model} />
                </Draw>
            </P5>
        </>
    );
}
