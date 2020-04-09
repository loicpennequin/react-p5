import React, { useRef, useContext, useCallback } from 'react';
import { Background, Layer, Line, Command, P5Context } from 'p5-react';
import { SketchWrapper } from '../components/SketchWrapper';
import { useTheme } from '@material-ui/core/styles';
import { Button, ButtonGroup, Box } from '@material-ui/core';

const SketchOptions = () => {
    const { findLayer } = useContext(P5Context);
    const clearBlack = () => {
        const layer = findLayer('blackLine');
        if (layer) {
            layer.clear();
        }
    };
    const clearRed = () => {
        const layer = findLayer('redLine');
        if (layer) {
            layer.clear();
        }
    };

    const clearBoth = () => {
        clearBlack();
        clearRed();
    };
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <ButtonGroup size="small" variant="contained" color="primary">
                <Button onClick={clearBlack}>Clear Black Line</Button>
                <Button onClick={clearRed}>Clear Red Line</Button>
                <Button onClick={clearBoth}>Clear both lines</Button>
            </ButtonGroup>
        </Box>
    );
};
export default function LayerPage() {
    const lineY = useRef(0);
    const updateLinePosition = useCallback(p => {
        lineY.current++;
        if (lineY.current > p.height) lineY.current = 0;
    }, []);

    const theme = useTheme();

    const getStrokeWeight = useCallback(p => {
        const distance = p.dist(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        return p.map(distance, 0, 30, 1, 8);
    }, []);
    return (
        <SketchWrapper
            title="Layer"
            githubLink="https://github.com/loicpennequin/react-p5/blob/master/src/Layer.jsx"
            description={Layer.toMarkdown()}
            setup={<Background color={0} />}
            draw={
                <>
                    <Command command={updateLinePosition} />
                    <Background color={255} />
                    <Line
                        from={p => [0, lineY.current]}
                        to={p => [p.width, lineY.current]}
                        fill={theme.palette.primary.main}
                        strokeWeight={2}
                    />
                    <Layer id="blackLine" autoClear={false}>
                        <Line
                            from={p => [p.pmouseX, p.pmouseY]}
                            to={p => [p.mouseX, p.mouseY]}
                            strokeWeight={getStrokeWeight}
                            stroke={0}
                        />
                    </Layer>
                    <Layer id="redLine" autoClear={false}>
                        <Line
                            from={p => [p.width - p.pmouseX, p.pmouseY]}
                            to={p => [p.width - p.mouseX, p.mouseY]}
                            strokeWeight={getStrokeWeight}
                            stroke={theme.palette.primary.main}
                        />
                    </Layer>
                </>
            }
        >
            <SketchOptions />
        </SketchWrapper>
    );
}
