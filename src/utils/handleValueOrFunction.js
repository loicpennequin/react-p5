export const handleValueOrFunction = (p, ...values) => {
    const returnValue = values.map(value =>
        typeof value === 'function' ? value(p) : value
    );

    if (returnValue.length <= 1) return returnValue[0];
    return returnValue;
};
