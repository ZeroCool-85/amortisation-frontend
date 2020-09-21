import React from 'react';
import { TextField, TextFieldProps } from '@material-ui/core'
import { WrappedFieldProps } from 'redux-form'

const InputField = ({input, meta: { touched, invalid, error }, ...custom }: WrappedFieldProps & TextFieldProps) => {
    return (
        <TextField
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    );
};

export default InputField;
