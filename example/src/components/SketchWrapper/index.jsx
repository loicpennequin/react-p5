import 'prismjs/themes/prism-tomorrow.css';
import React, { useContext, useState, useMemo } from 'react';
import prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import { P5, Setup, Draw, Canvas } from 'p5-react';
import { appContext } from '../../App';
import {
    Card,
    CardContent,
    Switch,
    FormControlLabel,
    Box,
    IconButton,
    Tooltip,
    Link,
    useMediaQuery,
} from '@material-ui/core';
import jsxToString from 'react-element-to-jsx-string';
import { Code, Link as LinkIcon } from '@material-ui/icons';
import { useStyles } from './styles';
import { ComponentDescription } from '../ComponentDescription';

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

    const isVerticalLayout = useMediaQuery(theme =>
        theme.breakpoints.down('sm')
    );
    const preview = useMemo(
        () => (
            <>
                <Setup>
                    <Canvas
                        width={350}
                        height={350}
                        canvasClassName={classes.canvas}
                    />
                    {setup}
                </Setup>
                <Draw>{draw}</Draw>
            </>
        ),
        [classes.canvas, draw, setup]
    );
    const highlightedCode = useMemo(() => {
        return prism.highlight(
            jsxToString(preview, { showFunctions: true }),
            prism.languages.jsx
        );
    }, [preview]);
    return (
        <Card>
            <CardContent
                component={Box}
                display="flex"
                flexDirection={isVerticalLayout ? 'column' : 'row'}
                className={classes.cardContent}
            >
                <Box
                    width={isVerticalLayout ? 'auto' : 450}
                    order={isVerticalLayout ? 1 : 0}
                >
                    <P5 options={state} className="canvas">
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
                    </P5>
                </Box>

                <Box
                    ml={!isVerticalLayout && 4}
                    px={2}
                    flex={1}
                    className={classes.description}
                >
                    <ComponentDescription description={description} />
                </Box>
            </CardContent>
        </Card>
    );
}
