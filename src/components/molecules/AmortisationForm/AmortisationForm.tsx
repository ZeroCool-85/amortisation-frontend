import React, { useEffect, useState, useCallback, useRef } from 'react';
import {InjectedFormProps, Field} from 'redux-form';
import { Grid, Button } from '@material-ui/core'
import {AmortisationFormProps} from 'interfaces/form';
import SliderField from '../../atoms/SliderField/SliderField'
import InputField from '../../atoms/InputField/InputField'

interface Props {
    formValues?: object
    submit?: any
    submitSucceeded?: boolean
};

const AmortisationForm: React.FC<Props & AmortisationFormProps & InjectedFormProps<{}, Props>> = ({ handleSubmit, formValues, submitSucceeded, valid }) => {
    const [submitted, setSubmitted] = useState(false)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [debounce, setDebounce] = useState()
    const submitButton = useRef<HTMLButtonElement>(null)

    const submitForm = useCallback(() => {
        if (submitted && valid && submitButton) {
            setDebounce(setTimeout(() => submitButton.current?.click(), 300))
        }
    }, [submitButton, submitted, valid])

    useEffect(() => {
        submitForm()
    }, [formValues, submitForm])

    useEffect(() => {
        submitSucceeded && setSubmitted(true)
    }, [submitSucceeded])


    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} justify={'center'}>
                <Grid item xs={12} md={6}>
                    <Field
                        name={"loanAmount"}
                        label={"Darlehensbetrag"}
                        placeholder={"Darlehensbetrag"}
                        component={InputField}
                        type={"number"}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Field
                        name={"borrowingRate"}
                        label={"Sollzinssatz"}
                        placeholder={"Sollzinssatz"}
                        component={InputField}
                        type={"number"}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Field
                        name={"startRedemption"}
                        label={"anfängliche Tilgung"}
                        placeholder={"anfängliche Tilgung"}
                        component={InputField}
                        type={"number"}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Field
                        name={"years"}
                        label={"Zinsbindungsdauer"}
                        placeholder={"Zinsbindungsdauer"}
                        component={SliderField}
                        min={1}
                        max={30}
                        marks
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        ref={submitButton}
                        color={"primary"}
                        type={"submit"}
                        variant={"outlined"}
                        fullWidth
                    >
                        Berechnen
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default AmortisationForm;
