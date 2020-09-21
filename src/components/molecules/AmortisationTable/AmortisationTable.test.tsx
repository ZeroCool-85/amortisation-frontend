import React from 'react'
import {mount} from 'enzyme';

import AmortisationTable from './AmortisationTable';
import {TableBody, TableCell, TableHead} from '@material-ui/core';

describe('<AmortisationTable />', () => {
    let props: any;

    beforeAll(() => {
        props = {
            amortisation: {
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

    it('should mount SliderField',  () => {
        const wrapper = mount(<AmortisationTable {...props} />);
        expect(wrapper).toBeDefined();
    });

    it('should render all header',  () => {
        const wrapper = mount(<AmortisationTable {...props} />);
        expect(wrapper.find(TableHead).find(TableCell))
            .toHaveLength(5);
    });

    it('should render all body rows',  () => {
        const wrapper = mount(<AmortisationTable {...props} />);
        expect(wrapper.find(TableBody).find(TableCell))
            .toHaveLength(5);
    });

});
