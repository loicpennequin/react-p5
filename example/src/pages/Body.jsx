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

const description = `
The \`<Body>\` component allows you to easily render models.
`;
const code = `import React, from 'react';
import { Circle, Body } from 'p5-react';

function Draw(model) {
    return (
        <Body model={model}>
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
    )
}

export class BouncingObject {
    constructor(p, initialPosition) {
        this.position =
            initialPosition || p.createVector(p.width / 2, p.height / 2);
        this.vel = p.createVector(0, 0);
        this.gravity = p.createVector(0, 1);
    }

    applyForce() {
        this.vel.add(this.gravity);
        this.position.add(this.vel);
    }

    update(p) {
        this.applyForce();
        if (this.position.y > p.height) {
            this.position.y = p.height;
            this.vel = this.vel.mult(-1);
        }
    }
}

export class RandomPathObject {
    constructor(p, initialPosition) {
        this.position =
            initialPosition || p.createVector(p.width / 2, p.height / 2);
    }

    update(p) {
        this.position.x += p.random(-3, 3);
        this.position.y += p.random(-3, 3);
        if (this.position.x < 0) {
            this.position.x += p.width;
        } else if (this.position.x > p.width) {
            this.position.x -= p.width;
        } else if (this.position.y < 0) {
            this.position.y += p.height;
        } else if (this.position.y > p.height) {
            this.position.y -= p.height;
        }
    }
}
`;
export default function BodyPage() {
    const theme = useTheme();
    const [model, setModel] = useState('bouncing');
    const models = useMemo(
        () => ({
            bouncing: (p, o) => new BouncingObject(p, o && o.position),
            random: (p, o) => new RandomPathObject(p, o && o.position),
        }),
        []
    );

    const handleChange = e => {
        setModel(e.target.value);
    };
    return (
        <SketchWrapper
            title="Body"
            description={description}
            code={code}
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
