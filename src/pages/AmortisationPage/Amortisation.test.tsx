import React from 'react'
import {mount} from 'enzyme';

import { AmortisationPage } from 'pages';
import { Provider } from 'react-redux';
import {store} from 'store';
import AmortisationFormContainer from 'containers/AmortisationFormContainer/AmortisationFormContainer';
import AmortisationOverviewContainer from 'containers/AmortisationOverviewContainer/AmortisationOverviewContainer';
import {Typography} from '@material-ui/core';

describe('<AmortisationPage />', () => {
  it('should mount component', function () {
    const wrapper = mount(<Provider store={store}><AmortisationPage /></Provider>);
    expect(wrapper).toBeDefined();
  });

  it('should render title', function () {
    const wrapper = mount(<Provider store={store}><AmortisationPage /></Provider>);
    expect(wrapper.find(Typography)).toHaveLength(1)
  });

  it('should render AmortisationFormContainer', function () {
    const wrapper = mount(<Provider store={store}><AmortisationPage /></Provider>);
    expect(wrapper.find(AmortisationFormContainer)).toBeDefined();
  });

  it('should render AmortisationOverviewContainer', function () {
    const wrapper = mount(<Provider store={store}><AmortisationPage /></Provider>);
    expect(wrapper.find(AmortisationOverviewContainer)).toBeDefined();
  });

});
