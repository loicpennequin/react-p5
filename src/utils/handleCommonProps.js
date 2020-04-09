import { handleValueOrFunction } from './handleValueOrFunction';
import PropTypes from 'prop-types';

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

const generate = (name, ...propTypes) => ({
    [name]: PropTypes.oneOfType([PropTypes.func, ...propTypes]),
});
export const commonPropTypes = Object.assign(
    {},
    generate(
        'ellipseMode',
        PropTypes.oneOf(['center', 'radius', 'corner', 'corners'])
    ),
    generate(
        'rectMode',
        PropTypes.oneOf(['center', 'radius', 'corner', 'corners'])
    ),
    generate('angleMode', PropTypes.oneOf(['degrees', 'radians'])),
    generate(
        'colorMode',
        PropTypes.array,
        PropTypes.oneOf(['rgb', 'hsb', 'hsl'])
    ),
    generate(
        'fill',
        PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.string,
        ])
    ),
    generate(
        'stroke',
        PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.string,
        ])
    ),
    {
        noFill: PropTypes.bool,
        noStroke: PropTypes.bool,
    },
    generate('strokeJoin', PropTypes.oneOf(['miter', 'bevel', 'round'])),
    generate('strokeCap', PropTypes.oneOf(['round', 'square', 'project'])),
    generate('strokeWeight', PropTypes.number),
    generate('translate', PropTypes.array),
    generate('rotate', PropTypes.number, PropTypes.array),
    generate('scale', PropTypes.number, PropTypes.array),
    generate('shearX', PropTypes.number),
    generate('shearY', PropTypes.number),
    generate('applyMatrix', PropTypes.array)
);
