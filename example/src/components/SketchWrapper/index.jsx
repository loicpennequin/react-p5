import React, { useContext } from 'react';
import { P5, Setup, Draw, Canvas } from 'p5-react';
import { appContext } from '../../App';
import {
    Card,
    CardContent,
    Switch,
    FormControlLabel,
    Typography,
    Box,
} from '@material-ui/core';
import { useStyles } from './styles';

export function SketchWrapper({ children, setup, draw, title, description }) {
    const { state, setState } = useContext(appContext);
    const toggleDebug = () => setState({ debug: !state.debug });
    const classes = useStyles();

    return (
        <Card>
            <CardContent component={Box} display="flex">
                <Box>
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
                </Box>
                <Box ml={4} px={2}>
                    <Typography
                        variant="h3"
                        component="h2"
                        className={classes.title}
                    >
                        {title}
                    </Typography>
                    {description}
                </Box>
            </CardContent>
        </Card>
    );
}
