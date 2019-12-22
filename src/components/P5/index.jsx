import React, {
    memo,
    createContext,
    useState,
    useRef,
    useEffect,
    useMemo,
    useContext
} from 'react';
import p5 from 'p5';

p5.disableFriendlyErrors = true;

const p5Context = createContext(null);
const p5RenderContext = createContext(null);

export const useP5 = () => {
    const context = useContext(p5Context);

    return context;
};

function P5({
    frameRate,
    noLoop,
    clearOnDraw,
    className = '',
    canvasClassName = '',
    children,
    debug,
    ...props
}) {
    const canvasRef = useRef(null);
    const drawBlocks = useRef([]);
    const setupBlocks = useRef([]);
    const [p5Instance, setP5Instance] = useState(
        new p5(p => {
            p.__id = 'dummyCanvas';
            p.noCanvas();
            p.setup = () => {};
        })
    );
    const [setupIsDone, setSetupIsDone] = useState(false);

    const p5ContextAPI = useMemo(
        () => ({
            defineBlock(typeRef, block, index) {
                if (index !== undefined) {
                    typeRef.current.splice(index, 0, block);
                } else {
                    typeRef.current.push(block);
                }
                return function clear() {
                    const idx = typeRef.current.findIndex(b => b === block);
                    typeRef.current.splice(idx, 1);
                    return idx;
                };
            },

            setupIsDone,

            defineDrawBlock(...args) {
                return p5ContextAPI.defineBlock(drawBlocks, ...args);
            },

            defineSetupBlock(...args) {
                return p5ContextAPI.defineBlock(setupBlocks, ...args);
            },

            p5Instance,
            debug
        }),
        [debug, p5Instance, setupIsDone]
    );

    const sketchConfig = useMemo(
        () => p => {
            p.__id = 'root';
            p._createCanvas = p.createCanvas;
            p.createCanvas = (...args) => {
                const canvas = p._createCanvas(...args);
                canvas.elt.className = canvasClassName;
                canvas.parent(canvasRef.current);
                return canvas;
            };

            p.setup = () => {
                if (debug) {
                    console.group('=========SETUP');
                    console.log('p5 instance id', p.__id);
                    console.log('Setup blocks :', setupBlocks.current.length);
                }
                if (frameRate) {
                    p.frameRate(frameRate);
                }
                setupBlocks.current.forEach(block => {
                    block(p, canvasRef.current);
                });

                setSetupIsDone(true);

                if (debug) {
                    console.groupEnd();
                }
            };

            p.draw = () => {
                if (debug) {
                    console.group('=========DRAW');
                    console.log('p5 instance id', p.__id);
                    console.log('Draw blocks :', drawBlocks.current.length);
                }
                if (clearOnDraw) p.clear();
                drawBlocks.current.forEach(block => {
                    block(p);
                });

                if (noLoop && drawBlocks.current.length > 0) {
                    p.noLoop();
                }

                if (debug) {
                    console.groupEnd();
                }
            };
            setP5Instance(p);
        },
        [canvasClassName, clearOnDraw, debug, frameRate, noLoop]
    );

    useEffect(() => {
        if (debug) console.log('initializing root canvas');
        new p5(sketchConfig);
    }, [debug, sketchConfig]);

    return (
        <p5Context.Provider value={p5ContextAPI}>
            <div ref={canvasRef} className={className} {...props}>
                {children}
            </div>
        </p5Context.Provider>
    );
}

function P5BlockList({ children, onRender }) {
    const { p5Instance } = useContext(p5Context);
    if (!p5Instance && typeof children === 'function') return null;

    return (
        <p5RenderContext.Provider value={{ render: onRender }}>
            {typeof children === 'function' ? children(p5Instance) : children}
        </p5RenderContext.Provider>
    );
}

function P5Draw({ children }) {
    const { setupIsDone, defineDrawBlock } = useContext(p5Context);
    if (!setupIsDone) return null;
    return <P5BlockList onRender={defineDrawBlock}>{children}</P5BlockList>;
}
export const Draw = memo(P5Draw);

function P5Setup({ children }) {
    const { defineSetupBlock } = useContext(p5Context);

    return <P5BlockList onRender={defineSetupBlock}>{children}</P5BlockList>;
}
export const Setup = memo(P5Setup);

function P5Block({ pInstance, onRender, ...props }) {
    const { render } = useContext(p5RenderContext);
    const blockIndex = useRef();

    useEffect(() => {
        const clear = render((p, canvasRef) => {
            // console.log('P5.block, defining block', pInstance);
            let pContext = pInstance ? pInstance : p;
            if (pContext.current) pContext = pContext.current;
            if (!pContext || Object.keys(pContext).length <= 0) return;
            try {
                onRender(pContext, canvasRef);
            } catch (err) {
                console.error(err);
            }
        }, blockIndex.current);
        return () => {
            blockIndex.current = clear();
        };
    }, [render, onRender, pInstance]);

    return null;
}

export const Block = memo(P5Block);

P5.Draw = memo(P5Draw);
P5.Setup = memo(P5Setup);
P5.Block = memo(P5Block);
export default P5;
