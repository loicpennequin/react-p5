import React, { useCallback } from 'react';
import { Command } from './Command';
import { handleCommonProps, commonPropTypes } from './utils/handleCommonProps';
import { describe } from 'react-desc';

function PushPopComponent({ children, ...props }) {
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
PushPopComponent.displayName = 'PushPop';

export const PushPop = describe(PushPopComponent).description('Todo');

PushPop.propTypes = commonPropTypes;
