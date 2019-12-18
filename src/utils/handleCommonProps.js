export default function handleCommonProps(props, p) {
    if (props.noFill) p.noFill();
    else if (Array.isArray(props.fillColor)) p.fill(...props.fillColor);
    else p.fill(props.fillColor);

    if (props.noStroke) p.noStroke();
    else if (Array.isArray(props.strokeColor)) p.fill(...props.strokeColor);
    else p.stroke(props.strokeColor);

    if (props.strokeWeight) p.strokeWeight(props.strokeWeight);
}
