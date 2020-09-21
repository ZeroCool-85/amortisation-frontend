import React, {useCallback} from 'react';
import {
    Slider,
    SliderProps,
    FormControl,
    FormLabel,
    FormControlLabelProps
} from '@material-ui/core'
import {WrappedFieldProps} from 'redux-form';

const SliderField = ({input, meta, label, ...custom }: WrappedFieldProps & SliderProps & FormControlLabelProps) => {
    const onChange = useCallback((e, v) => {
        input.onChange(v)
    }, [input])
    return (
        <FormControl fullWidth>
            <FormLabel component={'label'}>{label}</FormLabel>
            <Slider
                {...custom}
                {...input}
                onChange={onChange}
            />
        </FormControl>
    );
};

export default SliderField;
