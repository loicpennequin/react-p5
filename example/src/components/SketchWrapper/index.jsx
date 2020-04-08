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
    Box,
    IconButton,
    Tooltip,
    Link,
} from '@material-ui/core';
import jsxToString from 'react-element-to-jsx-string';
import { Code, Link as LinkIcon } from '@material-ui/icons';
import { useStyles } from './styles';

export function SketchWrapper({
    children,
    setup,
    draw,
    title,
    description,
    githubLink,
}) {
    const { state, setState } = useContext(appContext);
    const [showCode, setShowCode] = useState(false);
    const classes = useStyles();
    const toggleDebug = () => setState({ debug: !state.debug });
    const toggleCode = () => setShowCode(c => !c);

    const preview = useMemo(
        () => (
            <P5 options={state} className="canvas">
                <Setup>
                    <Canvas
                        width={400}
                        height={400}
                        canvasClassName={classes.canvas}
                    />
                    {setup}
                </Setup>
                <Draw>{draw}</Draw>
            </P5>
        ),
        [classes.canvas, draw, setup, state]
    );
    const highlightedCode = useMemo(() => {
        return prism.highlight(
            jsxToString(preview, { showFunctions: true }),
            prism.languages.jsx
        );
    }, [preview]);
    return (
        <Card>
            <CardContent component={Box} display="flex">
                <Box width={450}>
                    {preview}
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
                    {githubLink && (
                        <Tooltip
                            title="View source on github"
                            placement="top-start"
                            arrow
                        >
                            <IconButton
                                aria-label="View source on github"
                                color="primary"
                                component={Link}
                                href={githubLink}
                                target="_blank"
                                rel="noopener"
                            >
                                <LinkIcon />
                            </IconButton>
                        </Tooltip>
                    )}

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
                </Box>

                <Box ml={4} px={2} flex={1} className={classes.description}>
                    <Markdown source={description} />
                </Box>
            </CardContent>
        </Card>
    );
}
