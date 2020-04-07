import { handleValueOrFunction } from './handleValueOrFunction';

export function handleCommonProps(props, p) {
    const applyProp = propName => {
        if (!props.hasOwnProperty(propName)) return;
        const value = handleValueOrFunction(p, props[propName]);

        if (Array.isArray(value)) p[propName](...value);
        else p[propName](value);
    };

    if (props.noFill) p.noFill();
    if (props.noStroke) p.noStroke();

    applyProp('ellipseMode');
    applyProp('rectMode');
    applyProp('angleMode');
    applyProp('colorMode');

    applyProp('fill');
    applyProp('stroke');

    applyProp('strokeJoin');
    applyProp('strokeCap');
    applyProp('strokeWeight');

    applyProp('translate');
    applyProp('rotate');
    applyProp('scale');
    applyProp('shearX');
    applyProp('shearY');
    applyProp('applyMatrix');
}
