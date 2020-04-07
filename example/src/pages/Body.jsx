import React, { useState, useCallback } from 'react';
import { Body } from '../components/Body';
import { BouncingObject, RandomPathObject } from '../models';
import { SketchWrapper } from '../components/SketchWrapper';
import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
} from '@material-ui/core';
export default function SmileyFacePage() {
    const bouncing = useCallback(
        (p, o) => new BouncingObject(p, o && o.position),
        []
    );
    const random = useCallback(
        (p, o) => new RandomPathObject(p, o && o.position),
        []
    );

    const models = {
        bouncing,
        random,
    };

    const [model, setModel] = useState('bouncing');
    const handleChange = e => {
        setModel(e.target.value);
    };
    return (
        <SketchWrapper title="Body" draw={<Body model={models[model]} />}>
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
