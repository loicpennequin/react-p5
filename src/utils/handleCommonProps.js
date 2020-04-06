export function handleCommonProps(props, p) {
    const applyProp = propName => {
        if (!props.hasOwnProperty(propName)) return;
        let params;

        if (typeof props[propName] === 'function') params = props[propName](p);
        else params = props[propName];

        if (Array.isArray(params)) p[propName](...params);
        else p[propName](params);
    };

    if (props.noFill) p.noFill();
    else if (Array.isArray(props.fill)) p.fill(...props.fill);
    applyProp('fill');

    if (props.noStroke) p.noStroke();
    else if (Array.isArray(props.stroke)) p.stroke(...props.stroke);
    applyProp('stroke');

    applyProp('strokeJoin');
    applyProp('strokeCap');
    applyProp('strokeWeight');

    applyProp('ellipseMode');
    applyProp('rectMode');
    applyProp('angleMode');
}
