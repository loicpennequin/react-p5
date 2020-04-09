import React, { createContext, useContext } from 'react';
import { Debug } from './Debug';
import { SETUP, DRAW, P5Context } from './P5';
import PropTypes from 'prop-types';

export const P5RenderContext = createContext(null);

/** Todo */
export const RenderContextProvider = ({ step, children }) => {
    const { p5Instance, defineCommandFactory, ...ctx } = useContext(P5Context);
    const api = {
        defineCommand: defineCommandFactory(step),
        rootP5Instance: p5Instance,
        p5Instance,
        ...ctx,
    };

    if (!p5Instance) return null;

    return (
        <P5RenderContext.Provider value={api}>
            {children}
        </P5RenderContext.Provider>
    );
};
RenderContextProvider.displayName = 'RenderContextProvider';
RenderContextProvider.PropTypes = {
    /** Todo */
    step: PropTypes.string,
};

/** todo */
export const Setup = ({ children }) => {
    return (
        <RenderContextProvider step={SETUP}>{children}</RenderContextProvider>
    );
};
Setup.displayName = 'Setup';

/** todo  */
export const Draw = ({ children }) => {
    const { getOptions } = useContext(P5Context);
    return (
        <RenderContextProvider step={DRAW}>
            {children}
            {getOptions().debug && <Debug />}
        </RenderContextProvider>
    );
};
Draw.displayName = 'Draw';
