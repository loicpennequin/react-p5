import React, {
    useRef,
    useMemo,
    useState,
    useEffect,
    createContext,
    useContext,
} from 'react';
import p5 from 'p5';

p5.disableFriendlyErrors = true;
export const SETUP = 'setup';
export const DRAW = 'draw';

export const P5Context = createContext(null);

export const useP5 = () => {
    const context = useContext(P5RenderContext);

    return {
        p: context.p5Instance,
        root: context.rootP5Instance,
        draw: context.defineCommand,
    };
};

export const useDraw = command => {
    const { draw } = useP5();

    useEffect(() => {
        const clear = draw(command);
        return () => clear();
    }, [draw, command]);
};

const DEFAULT_OPTIONS = {
    clearOnDraw: false,
    frameRate: 60,
    debug: false,
};

export const P5 = ({ options, children, ...props }) => {
    const [p5Instance, setP5Instance] = useState(null);
    const canvasOptions = useMemo(() => ({ ...DEFAULT_OPTIONS, ...options }), [
        options,
    ]);
    const commands = useRef({
        [SETUP]: [],
        [DRAW]: [],
    });

    useEffect(() => {
        if (!p5Instance) {
            setP5Instance(
                new p5(p => {
                    p.__id = 'ROOT';

                    p.setup = () => {
                        p.frameRate(canvasOptions.frameRate);
                        commands.current[SETUP].forEach(command => command());
                    };

                    p.draw = () => {
                        if (canvasOptions.clearOnDraw) {
                            p.clear();
                        }
                        commands.current[DRAW].forEach(command => {
                            command();
                        });
                    };
                })
            );
        }
    }, [canvasOptions.clearOnDraw, canvasOptions.frameRate, p5Instance]);

    const api = {
        p5Instance,
        getOptions: () => canvasOptions,
        getCommands: () => commands.current,
        defineCommandFactory: key => (command, ctx = p5Instance, idx) => {
            if (typeof idx !== 'number') {
                idx = commands.current[key].length;
            }

            const handler = () => {
                return command(typeof ctx === 'function' ? ctx() : ctx);
            };
            handler.__type = command.__type;
            if (commands.current[key].length <= 0) {
                commands.current[key].push(handler);
            } else {
                commands.current[key].splice(idx, 0, handler);
            }
            return () => {
                const index = commands.current[key].indexOf(handler);
                commands.current[key] = commands.current[key].filter(
                    c => c !== handler
                );
                return index;
            };
        },
    };

    return <P5Context.Provider value={api}>{children}</P5Context.Provider>;
};
