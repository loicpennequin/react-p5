import docs from '../assets/docs.generated.json';
import React, { useState, useMemo } from 'react';
import { BouncingObject, RandomPathObject } from '../models';
import { SketchWrapper } from '../components/SketchWrapper';
import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
} from '@material-ui/core';
import { Circle, Body } from 'p5-react';
import { useTheme } from '@material-ui/core/styles';

export default function BodyPage() {
    const theme = useTheme();
    const [model, setModel] = useState('bouncing');
    const models = useMemo(
        () => ({
            bouncing: (p, currentModel) =>
                new BouncingObject(p, currentModel && currentModel.position),
            random: (p, currentModel) =>
                new RandomPathObject(p, currentModel && currentModel.position),
        }),
        []
    );

    const handleChange = e => {
        setModel(e.target.value);
    };
    return (
        <SketchWrapper
            title="Body"
            description={docs.Body}
            githubLink="https://github.com/loicpennequin/react-p5/blob/master/src/Body.jsx"
            draw={
                <Body model={models[model]}>
                    {({ position }) => (
                        <Circle
                            x={position.x}
                            y={position.y}
                            size={50}
                            fill={theme.palette.primary.main}
                            noStroke
                        />
                    )}
                </Body>
            }
        >
            <FormControl component="fieldset">
                <FormLabel component="legend">Model</FormLabel>
                <RadioGroup name="model" value={model} onChange={handleChange}>
                    <FormControlLabel
                        value="bouncing"
                        control={<Radio />}
                        label="Bouncing ball"
                    />
                    <FormControlLabel
                        value="random"
                        control={<Radio />}
                        label="Ball moving randomly"
                    />
                </RadioGroup>
            </FormControl>
        </SketchWrapper>
    );
}
