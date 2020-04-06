import React, { useCallback } from 'react';
import { Command } from './Command';

export function PushPop({ children }) {
    const push = useCallback(p => {
        p.push();
    }, []);

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
