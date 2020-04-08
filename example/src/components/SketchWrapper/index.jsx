import 'prismjs/themes/prism-tomorrow.css';
import React, { useContext, useState, useMemo } from 'react';
import prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import { P5, Setup, Draw, Canvas } from 'p5-react';
import { appContext } from '../../App';
import Markdown from 'react-markdown';
import {
    Card,
    CardContent,
    Switch,
    FormControlLabel,
    Typography,
    Box,
    IconButton,
    Tooltip,
} from '@material-ui/core';
import jsxToString from 'react-element-to-jsx-string';
import { Code } from '@material-ui/icons';
import { useStyles } from './styles';

export function SketchWrapper({
    children,
    setup,
    draw,
    title,
    description,
    code,
}) {
    const { state, setState } = useContext(appContext);
    const [showCode, setShowCode] = useState(false);
    const classes = useStyles();
    const toggleDebug = () => setState({ debug: !state.debug });
    const toggleCode = () => setShowCode(c => !c);

    const highlightedCode = useMemo(() => {
        if (!code) {
            return prism.highlight(
                jsxToString(draw, { showFunctions: true }),
                prism.languages.jsx
            );
        }
        return prism.highlight(code, prism.languages.jsx);
    }, [code, draw]);
    return (
        <Card>
            <CardContent component={Box} display="flex">
                <Box className={classes.preview}>
                    <P5 options={state} className="canvas">
                        <Setup>
                            <Canvas
                                width={350}
                                height={350}
                                canvasClassName={classes.canvas}
                            />
                            {setup}
                        </Setup>
                        <Draw>{draw}</Draw>
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

                        <Tooltip
                            title={showCode ? 'Hide code' : 'Show code'}
                            placement="top-start"
                            arrow
                        >
                            <IconButton
                                aria-label="Show code"
                                color="primary"
                                onClick={toggleCode}
                            >
                                <Code />
                            </IconButton>
                        </Tooltip>
                        {showCode && (
                            <pre className="language-jsx">
                                <code
                                    className="language-jsx"
                                    dangerouslySetInnerHTML={{
                                        __html: highlightedCode,
                                    }}
                                ></code>
                            </pre>
                        )}
                        <Box>{children}</Box>
                    </P5>
                </Box>

                <Box ml={4} px={2}>
                    <Typography
                        variant="h4"
                        component="h2"
                        className={classes.title}
                    >
                        {title}
                    </Typography>
                    <Markdown source={description} />
                </Box>
            </CardContent>
        </Card>
    );
}
