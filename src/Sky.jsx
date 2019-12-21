import React, { useCallback, useMemo } from 'react';
import { useP5 } from './components/P5';
import Gradient from './components/Gradient';
import Layer from './components/Layer';
import Circle from './components/Circle';

export default function Sky() {
    const { p5Instance } = useP5();

    return (
        <>
            <Gradient
                colors={['#5544aa', '#223352']}
                width={p5Instance.width}
                height={p5Instance.height}
            />
            <SnowField />
        </>
    );
}

function SnowField() {
    const { p5Instance } = useP5();
    const createSnowflake = useCallback(
        i => {
            return {
                id: i,
                x: p5Instance.random(0, p5Instance.width),
                y: p5Instance.random(0, p5Instance.height),
                size: p5Instance.random(10, 20)
            };
        },
        [p5Instance]
    );

    const stars = useMemo(() => {
        const NUMBER_OF_STARS = 20;
        return Array(NUMBER_OF_STARS)
            .fill()
            .map((_, i) => createSnowflake(i));
    }, [createSnowflake]);

    return (
        <Layer>
            {p =>
                stars.map(star => <SnowFlake key={star.id} p={p} {...star} />)
            }
        </Layer>
    );
}

function SnowFlake(props) {
    return (
        <>
            <Circle
                {...props}
                size={props.size + 10}
                noStroke
                fillColor={[255, 255, 255, 60]}
            />
            <Circle
                {...props}
                size={props.size + 5}
                noStroke
                fillColor={[255, 255, 255, 128]}
            />
            <Circle {...props} noStroke fillColor={255} />
        </>
    );
}
