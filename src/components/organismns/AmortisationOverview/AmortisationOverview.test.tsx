import React from 'react'
import {mount} from 'enzyme';

import AmortisationOverview from './AmortisationOverview';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {CircularProgress, Typography} from '@material-ui/core';
import AmortisationTableContainer from 'containers/AmortisationTableContainer/AmortisationTableContainer';

describe('<AmortisationOverview />', () => {

    let store: any;
    const mockStore = configureStore();

    let props: any;

    beforeEach(() => {
        store = mockStore({})
        props = {
            isLoading: false,
            error: false,
            amortisation: {
                monthlyLoanRate: 100,
                balanceDueAfterFixedInterestRate: 100,
                amortisationSchedule: [
                    {
                        rate: 1,
                        interestPortion: 2,
                        amortisationPortion: 3,
                        balanceDue: 4,
                    }
                ]
            }
        }
    })

    it('should mount AmortisationOverview',  () => {
        const wrapper = mount(
            <Provider store={store}>
                <AmortisationOverview {...props} />
            </Provider>
            );
        expect(wrapper).toBeDefined();
    });

    it('should render progress',  () => {
        props.isLoading = true
        props.amortisation = null
        const wrapper = mount(
            <Provider store={store}>
                <AmortisationOverview {...props} />
            </Provider>
        );
        expect(wrapper.find(CircularProgress)).toHaveLength(1)
    });

    it('should render error',  () => {
        props.error = true
        const wrapper = mount(
            <Provider store={store}>
                <AmortisationOverview {...props} />
            </Provider>
        );
        expect(wrapper.find(Typography)).toHaveLength(1)
    });

    it('should render all typographies',  () => {
        const wrapper = mount(
            <Provider store={store}>
                <AmortisationOverview {...props} />
            </Provider>
        );
        expect(wrapper.find(Typography)).toHaveLength(5)
    });

    it('should render AmortisationTableContainer',  () => {
        const wrapper = mount(
            <Provider store={store}>
                <AmortisationOverview {...props} />
            </Provider>
        );
        expect(wrapper.find(AmortisationTableContainer)).toHaveLength(1)
    });

});
