const isEmpty = (value: any) => value === undefined || value === null || value === '';

const join = (rules: Array<any>) => (value: any, data: object) => rules.map((rule: any) => rule(value, data)).filter((error: any) => !!error)[0];

export const createValidator = (rules: {[index: string]:any}) => (data: {[index: string]:any} = {}) => {
    const errors: {[index: string]:any} = {};
    Object.keys(rules).forEach((key: string) => {
        const rule = join([].concat(rules[key]));
        const error = rule(data[key], data);
        if (error) {
            errors[key] = error;
        }
    });
    return errors;
};

export const required = (value: any) => {
    if (value) {
        const trimmedValue = typeof value === 'string' ? value.trim() : value;
        if (!isEmpty(trimmedValue)) {
            return false;
        }
    }
    return 'Pflichtfeld';
};

export const valueMustBePositiv = (value: any) => {
    value = Number.parseFloat(value)
    if(Number.isNaN(value) || value < 0) {
        return 'Die Eingabe muss eine positive Zahl sein';
    }
    return false;
};

