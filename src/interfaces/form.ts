import {FormSubmitHandler} from 'redux-form';

export interface AmortisationFormProps {
    onSubmit?: (values: Partial<FormSubmitHandler>) => void
}
