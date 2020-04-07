import React, { useCallback } from 'react';
import { Command } from './Command';
import { handleCommonProps } from './utils/handleCommonProps';

export function PushPop({ children, ...props }) {
    const push = useCallback(
        p => {
            p.push();
            handleCommonProps(props, p);
        },
        [props]
    );

    const pop = useCallback(p => {
        p.pop();
    }, []);
    return (
        <>
            <Command command={push} />
            {children}
            <Command command={pop} />
        </>
    );
}
