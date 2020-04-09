import React, { useCallback } from 'react';
import { Command } from './Command';
import { handleValueOrFunction } from './utils/handleValueOrFunction';
import { describe, PropTypes } from 'react-desc';

function BackgroundComponent({ color, children, ...props }) {
    const command = useCallback(
        p => {
            p.background(handleValueOrFunction(p, color));
        },
        [color]
    );
    return (
        <>
            <Command command={command} />
            {children}
        </>
    );
}
BackgroundComponent.displayName = 'Background';

export const Background = describe(BackgroundComponent).description('todo');

Background.propTypes = {
    color: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.number,
        PropTypes.array,
    ]),
};
