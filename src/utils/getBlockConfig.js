export default function getBlockConfig(props, ref) {
    if (!ref) return props;
    for (var propName in props) {
        if (props[propName] === null || props[propName] === undefined) {
            delete props[propName];
        }
    }
    return Object.assign({}, ref.current, props);
}
