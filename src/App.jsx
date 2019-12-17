import React, {useState} from 'react';
import P5 from './components/P5';
import Circle from './components/Circle';
import Canvas from './components/Canvas';

export default function App() {
    const [circles, setCircles] = useState([]);

    function addCircle() {
        setCircles(circles => circles.concat({
            x: Math.round(Math.random() * 300),
            y: Math.round(Math.random() * 300),
        }))
    }

    return (
        <P5 onClick={addCircle}>
            <P5.Setup>
                <Canvas width={300} height={300} background={0} />
            </P5.Setup>
            <P5.Draw>
                {circles.map((circle, i) => <Circle x={circle.x} y={circle.y} size={30} key={i}/>)}
            </P5.Draw>
        </P5>
    );
}