import React from 'react'
import {mount} from 'enzyme';
import { FormHelperText } from '@material-ui/core'

import InputField from './InputField';

describe('<InputField />', () => {
    let props: any;

    beforeAll(() => {
        props = {
            name: 'test',
            meta:  {
                touched: false,
                invalid: false,
                error: undefined
            },
            input: {},
        }
    })

    it('should mount InputField',  () => {
        const wrapper = mount(<InputField {...props} />);
        expect(wrapper).toBeDefined();
    });

    it('should render helpertext on error', () => {
        props.meta = {
            touched: true,
            invalid: true,
            error: ['error']
        }
        const wrapper = mount(<InputField {...props}/>);
        expect(wrapper.find(FormHelperText)).toHaveLength(1)
    })


});
