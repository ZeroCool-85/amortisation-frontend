import React from 'react'
import {mount, shallow} from 'enzyme';

import SliderField from './SliderField';
import {FormLabel, Slider} from '@material-ui/core';

describe('<SliderField />', () => {
    let props: any;
    let labelText = 'SliderField'
    let expectedLabelText = 'SliderField'

    beforeAll(() => {
        props = {
            label: labelText,
            input: {
                onChange: jest.fn()
            }
        }
    })

    it('should mount SliderField',  () => {
        const wrapper = mount(<SliderField {...props} />);
        expect(wrapper).toBeDefined();
    });

    it('should render label',  () => {
        const wrapper = mount(<SliderField {...props} />);
        expect(wrapper.find(FormLabel)).toBeDefined();
        expect(wrapper.find(FormLabel).text()).toEqual(expectedLabelText)
    });

    it('should call input.onChange on input changes',  () => {
        shallow(<SliderField {...props} />)
            .find(Slider)
            .simulate('change')
        expect(props.input.onChange).toBeCalled()
    });

});
