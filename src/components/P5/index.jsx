import React, { memo, createContext, useRef, useEffect, useMemo, useContext } from "react";
import p5 from "p5";

const p5Context = createContext(null);
const p5RenderContext = createContext(null);

function P5({ className, children, ...props }) {
    const canvasRef = useRef(null);
    const drawBlocks = useRef([]);
    const setupBlocks = useRef([]);

    const p5ContextAPI = useMemo(() => ({
        defineDrawBlock(block) {
            drawBlocks.current.push(block);
            return function clear() {
                drawBlocks.current = drawBlocks.current.filter(b => b !== block)
            }
        },  

        defineSetupBlock(block) {
            setupBlocks.current.push(block);
            return function clear() {
                setupBlocks.current = setupBlocks.current.filter(b => b !== block)
            }
        },
    }), []);

    const sketchConfig = useMemo(
        () =>
            p => {
                p._createCanvas = p.createCanvas;
                p.createCanvas = (...args) => {
                    p._createCanvas(...args).parent(canvasRef.current);
                }
                p.setup = () => {
                    setupBlocks.current.forEach(block => {
                        block(p, canvasRef.current);
                    })
                };

                p.draw = () => {
                    drawBlocks.current.forEach(block => {
                        block(p);
                    })
                };
            },
        []
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
    return <p5RenderContext.Provider value={{ render: onRender }}>{children}</p5RenderContext.Provider>;
}

function P5Draw({ children }) {
    const { defineDrawBlock } = useContext(p5Context);

    return <P5BlockList onRender={defineDrawBlock}>{children}</P5BlockList>
}

function P5Setup({ children }) {
    const { defineSetupBlock } = useContext(p5Context);

    return <P5BlockList onRender={defineSetupBlock}>{children}</P5BlockList>
}

function P5Block({ onRender, ...props }) {
    const { render } = useContext(p5RenderContext);

    useEffect(() => {
        render((p, canvasRef) => {
            onRender(p, canvasRef)
        });
    }, [onRender]);

    return null;
}

P5.Draw = memo(P5Draw);
P5.Setup = memo(P5Setup);
P5.Block = memo(P5Block);
export default P5;