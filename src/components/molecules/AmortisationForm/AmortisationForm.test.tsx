import React from 'react'
//import {mount} from 'enzyme';

import AmortisationForm from './AmortisationForm';
import { reduxForm } from 'redux-form';
import {Provider} from 'react-redux';
import configureStore  from 'redux-mock-store';
import {createMount} from '@material-ui/core/test-utils';

describe('<AmortisationForm />', () => {
    let WrappedAmortisationForm: any;
    let onSubmit = jest.fn()
    let store: any;
    let wrapper: any;
    let mount: any;

    const handleSubmit = jest.fn();
    const mockStore = configureStore();

    beforeAll(() => {
        store = mockStore({})
        WrappedAmortisationForm = reduxForm({
            onSubmit,
            form: 'TestForm',
            initialValues: {
                loanAmount: 200000,
                borrowingRate: 1.0,
                startRedemption: 2.0,
                years: 10
            }
        })(AmortisationForm);
    });

    beforeEach(() => {
        mount = createMount();
    });

    afterEach(() => {
        mount.cleanUp();
        wrapper = null;
    });

    it('should mount AmortisationForm',  () => {
        wrapper = mount(
            <Provider store={store}>
                <WrappedAmortisationForm handleSubmit={handleSubmit} />
            </Provider>
            );
        expect(wrapper).toBeDefined();
    });

});
