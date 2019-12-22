import React, { useCallback, useEffect, useRef, useMemo } from 'react';
import { Block, useP5 } from './components/P5';
import Gradient from './components/Gradient';
import Layer from './components/Layer';
import Circle from './components/Circle';

export default function Sky() {
    const { p5Instance } = useP5();

    return (
        <>
            <Gradient
                colors={['#3360aa', '#223352']}
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
                speed: p5Instance.random(5, 10),
                size: p5Instance.random(5, 20),
                update() {
                    this.y = this.y + this.speed;
                    if (this.y >= p5Instance.height + this.size / 2) {
                        this.y = -1 * (this.size / 2);
                    }
                }
            };
        },
        [p5Instance]
    );

    const stars = useMemo(() => {
        const NUMBER_OF_STARS = 25;
        return Array(NUMBER_OF_STARS)
            .fill()
            .map((_, i) => createSnowflake(i));
    }, [createSnowflake]);

    return (
        <Layer id="Snow field">
            {p =>
                stars.map(star => <SnowFlake key={star.id} p={p} star={star} />)
            }
        </Layer>
    );
}

function SnowFlake({ p, star }) {
    const starObject = useRef(star);

    useEffect(() => {
        starObject.current = star;
    }, [star]);

    const update = useCallback(() => {
        starObject.current.update();
    }, []);

    return (
        <>
            <Block pInstance={p} onRender={update} />
            <Circle
                ref={starObject}
                p={p}
                size={starObject.current.size + 10}
                noStroke
                fillColor={[255, 255, 255, 60]}
            />
            <Circle
                ref={starObject}
                p={p}
                size={starObject.current.size + 5}
                noStroke
                fillColor={[255, 255, 255, 128]}
            />
            <Circle ref={starObject} p={p} noStroke fillColor={255} />
        </>
    );
}
