import React from 'react'
import {mount} from 'enzyme';

import { AmortisationPage } from 'pages';
import { Provider } from 'react-redux';
import {store} from 'store';

describe('<AmortisationPage />', () => {
  it('should mount component', function () {
    const wrapper = mount(<Provider store={store}><AmortisationPage /></Provider>);
    expect(wrapper).toBeDefined();
  });


});
