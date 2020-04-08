import { useContext, useRef, useEffect } from 'react';
import { P5RenderContext } from './RenderContext';
import { describe, PropTypes } from 'react-desc';

function CommandComponent({ command, p }) {
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
}
CommandComponent.displayName = 'Command';

export const Command = describe(CommandComponent)
    .description(`The most low-level P5-react component to interact with your sketch. Under the hood, almost every P5-react component uses it

It gets passed a command as a prop, which is a function recieving the p5 instance as an argument, and will get executed during setup or draw depending on where the component is placed.
Basically, your Sketch will be a queue of \`Command />\` component that will get executed in the same order on each draw cycle.

The command prop may be updated at any time, and the result will appear on your sketch accordingly. The new command will take place at the same position in the commands queue, instead of being pushed at the end.`);

Command.propTypes = {
    command: PropTypes.func.description(
        'The command to be executed on the p5 Sketch. It takes the p5 instance as a prop'
    ).isRequired,
    p: PropTypes.object.description(
        'The p5 instance to be drawn onto by the command. If non is specified, it will draw on the current p5 Instance. see Layers for more informations on p5 instances.'
    ),
};
