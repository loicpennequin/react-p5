import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Command } from './Command';
import { useP5 } from './P5';
import { describe, PropTypes } from 'react-desc';

export function BodyComponent({ model, children }) {
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
        // We need to wait for the next tick before initializing the model
        // This is because it could happend that setup commands such as createCanvas have not been run yet, potentially forwarding wrong values into the model
        if (!_model.current) {
            setTimeout(() => {
                _model.current = model(p, _model.current);
                setObjectState({ state: _model.current });
            }, 25);
        } else {
            _model.current = model(p, _model.current);
            setObjectState({ state: _model.current });
        }
    }, [model, p]);

    return (
        <>
            <Command command={command}></Command>
            {objectState && children(objectState.state)}
        </>
    );
}
BodyComponent.displayName = 'Body';

export const Body = describe(BodyComponent)
    .description(`The \`<Body>\` component allows you to easily render moving object, 
by providing a constructor function via the \`model\` prop that contains an \`update()\` method. 
The update method will be called on every \`draw\` cycle by the P5 Instance.`);

Body.propTypes = {
    model: PropTypes.func.description(
        'a constructor function that takes the p5 instance as a parameter. It must return an object containing the `update()` method'
    ).isRequired,
};
