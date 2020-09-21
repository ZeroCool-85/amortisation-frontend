import { AmortisationForm } from 'components'
import {reduxForm, formValueSelector} from 'redux-form';
import {AmortisationFormProps} from 'interfaces/form';
import {createValidator, required, valueMustBePositiv} from 'services/validation';
import {Dispatch} from 'redux';
import { amortisationRequest } from 'store/amortisation/actions'
import { connect } from 'react-redux'

function onSubmit(data: any, dispatch: Dispatch) {
    console.log('data', data)
    dispatch && dispatch(amortisationRequest(data));
}

const validate = createValidator({
    loanAmount: [required, valueMustBePositiv],
    borrowingRate: [required],
    startRedemption: [required],
    years: [required],
})

const mapStateToProps = (state: any) => ({
    formValues: formValueSelector('AmortisationForm')(state, 'loanAmount', 'borrowingRate', 'startRedemption', 'years')
})

export default connect(mapStateToProps)(reduxForm<{}, AmortisationFormProps>({
    form: 'AmortisationForm',
    validate,
    onSubmit,
    initialValues: {
        loanAmount: 200000,
        borrowingRate: 1.0,
        startRedemption: 2.0,
        years: 10
    },
})(AmortisationForm));
