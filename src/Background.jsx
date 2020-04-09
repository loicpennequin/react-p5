import React, { useCallback } from 'react';
import { Command } from './Command';
import { handleValueOrFunction } from './utils/handleValueOrFunction';
import PropTypes from 'prop-types';

/** todo */
export function Background({ color, children, ...props }) {
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
Background.displayName = 'Background';

Background.propTypes = {
    /** todo */
    color: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.number,
        PropTypes.array,
    ]),
};
