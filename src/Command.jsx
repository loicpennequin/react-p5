import { useContext, useRef, useEffect } from 'react';
import { P5RenderContext } from './RenderContext';

export const Command = ({ command, p }) => {
    const renderContext = useContext(P5RenderContext);
    const commandIndex = useRef(null);

    useEffect(() => {
        const clear = renderContext.defineCommand(
            command,
            () => p || renderContext.p5Instance,
            commandIndex.current
        );
        return () => {
            commandIndex.current = clear();
        };
    }, [command, p, renderContext]);
    return null;
};
