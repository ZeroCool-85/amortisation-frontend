import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core'
import { CssBaseline } from '@material-ui/core';
import { store } from 'store';

import {AmortisationPage} from 'pages';

import defaultTheme from 'assests/theme/default'


const Provider = () => {
    return (
        <StoreProvider store={store}>
            <ThemeProvider theme={defaultTheme}>
                <CssBaseline>
                    <AmortisationPage />
                </CssBaseline>
            </ThemeProvider>
        </StoreProvider>
    );
};

export default Provider;
