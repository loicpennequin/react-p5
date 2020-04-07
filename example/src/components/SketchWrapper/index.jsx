import React, { useContext } from 'react';
import { P5, Setup, Draw, Canvas } from 'p5-react';
import { appContext } from '../../App';
import { Switch, FormControlLabel } from '@material-ui/core';
import { useStyles } from './styles';

export function SketchWrapper({ children, setup, draw }) {
    const { state, setState } = useContext(appContext);
    const toggleDebug = () => setState({ debug: !state.debug });
    const classes = useStyles();

    return (
        <>
            <FormControlLabel
                label="Debug"
                control={
                    <Switch
                        checked={state.debug}
                        onChange={toggleDebug}
                        name="debug-switch"
                    />
                }
            />

            <P5 options={state} className="canvas">
                <Setup>
                    <Canvas
                        width={500}
                        height={500}
                        canvasClassName={classes.canvas}
                    />
                    {setup}
                </Setup>
                <Draw>{draw}</Draw>
                {children}
            </P5>
        </>
    );
}
