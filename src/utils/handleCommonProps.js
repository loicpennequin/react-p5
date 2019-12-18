export default function handleCommonProps(props, p) {
    if (props.noFill) p.noFill();
    else if (Array.isArray(props.fillColor)) p.fill(...props.fillColor);
    else if (props.fillColor) p.fill(props.fillColor);
    else p.fill(0);

    if (props.noStroke) p.noStroke();
    else if (Array.isArray(props.strokeColor)) p.fill(...props.strokeColor);
    else if (props.strokeColor) p.stroke(props.strokeColor);
    else p.stroke(0);

    if (props.strokeWeight) p.strokeWeight(props.strokeWeight);
}
