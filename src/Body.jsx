import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Command } from './Command';
import { useP5 } from './P5';

export function Body({ model, children }) {
    const { p } = useP5();
    const _model = useRef(null);
    const [objectState, setObjectState] = useState(null);

    const command = useCallback(
        p => {
            if (objectState) {
                _model.current.update(p);
                setObjectState({ state: _model.current });
            }
        },
        [objectState]
    );

    useEffect(() => {
        _model.current = model(p, _model.current);
        setObjectState({ state: _model.current });
    }, [model, p]);

    return (
        <>
            <Command command={command}></Command>
            {objectState && children(objectState.state)}
        </>
    );
}
