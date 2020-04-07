import React, { useContext } from 'react';
import { P5 } from 'p5-react';
import { appContext } from '../../App';

export function SketchWrapper({ children }) {
    const { state, setState } = useContext(appContext);
    const toggleDebug = () => setState({ debug: !state.debug });

    return (
        <>
            <div>
                <button onClick={toggleDebug}>
                    DEBUG: {state.debug ? 'ON' : 'OFF'}
                </button>
            </div>
            <P5 options={state} className="canvas">
                {children}
            </P5>
        </>
    );
}
