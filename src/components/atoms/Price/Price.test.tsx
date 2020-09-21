import React from 'react'
import {mount} from 'enzyme';

import Price from './Price';
import {Typography} from '@material-ui/core';

describe('<Price />', () => {
    const price = 5.2
    const expectedPrice = '5.20 €'

    it('should mount Price',  () => {
        const wrapper = mount(<Price  >{price}</Price>);
        expect(wrapper).toBeDefined();
    });

    it('should render price with 2 digits and currency',  () => {
        const wrapper = mount(<Price>{price}</Price>);
        expect(wrapper.find(Typography).text()).toEqual(expectedPrice);
    });

});
