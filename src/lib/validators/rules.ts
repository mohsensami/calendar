const requiredValue = 'REQUIRED_VALUE';
const minValue = 'MIN_VALUE';
const maxValue = 'MAX_VALUE';

export const requiredValidator = () => ({
    value: requiredValue,
});

export const minValidator = (min: any) => ({
    value: minValue,
    min,
});

export const maxValidator = (max: any) => ({
    value: maxValue,
    max,
});

export default { requiredValue, minValue, maxValue };
