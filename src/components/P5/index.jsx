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

const p5Context = createContext(null);
const p5RenderContext = createContext(null);

export const useP5 = () => {
    const context = useContext(p5Context);

    return context;
};

function P5({
    frameRate,
    className = '',
    canvasClassName = '',
    children,
    ...props
}) {
    const canvasRef = useRef(null);
    const drawBlocks = useRef([]);
    const setupBlocks = useRef([]);
    const [p5Instance, setP5Instance] = useState();

    const p5ContextAPI = useMemo(
        () => ({
            defineDrawBlock(block) {
                drawBlocks.current.push(block);
                return function clear() {
                    drawBlocks.current = drawBlocks.current.filter(
                        b => b !== block
                    );
                };
            },

            defineSetupBlock(block) {
                setupBlocks.current.push(block);
                return function clear() {
                    setupBlocks.current = setupBlocks.current.filter(
                        b => b !== block
                    );
                };
            },

            p5Instance
        }),
        [p5Instance]
    );

    const sketchConfig = useMemo(
        () => p => {
            setP5Instance(p);
            p._createCanvas = p.createCanvas;
            p.createCanvas = (...args) => {
                const canvas = p._createCanvas(...args);
                canvas.elt.className = canvasClassName;
                canvas.parent(canvasRef.current);
                return canvas;
            };
            p.setup = () => {
                if (frameRate) {
                    p.frameRate(frameRate);
                }
                setupBlocks.current.forEach(block => {
                    block(p, canvasRef.current);
                });
            };

            p.draw = () => {
                p.clear();
                drawBlocks.current.forEach(block => {
                    block(p);
                });
            };
        },
        [canvasClassName, frameRate]
    );

    useEffect(() => {
        new p5(sketchConfig);
    }, [sketchConfig]);

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
    const { defineDrawBlock } = useContext(p5Context);

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

    useEffect(() => {
        const remove = render((p, canvasRef) => {
            let pContext = pInstance ? pInstance : p;
            if (pContext.current) pContext = pContext.current;
            onRender(pContext, canvasRef);
        });
        return () => {
            remove();
        };
    }, [render, onRender, pInstance]);

    return null;
}
export const Block = memo(P5Block);

P5.Draw = memo(P5Draw);
P5.Setup = memo(P5Setup);
P5.Block = memo(P5Block);
export default P5;
