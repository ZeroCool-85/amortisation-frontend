import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red'

const defaultTheme = createMuiTheme();

const palette = {
    primary: {
        main: red[500],
    },
};

const theme = createMuiTheme({
    typography: {
        fontFamily: '"Noto Sans", sans-serif',
        htmlFontSize: 16,
        h1: {
            fontWeight: 'normal',
            fontStyle: 'normal',
            letterSpacing: '-0.015em',
            marginBottom: defaultTheme.spacing(1)
        },
        h2: {
            fontWeight: 300,
            fontStyle: 'normal',
            marginBottom: defaultTheme.spacing(1)
        },
        h3: {
            fontWeight: 400,
            fontStyle: 'normal',
            marginBottom: defaultTheme.spacing(1),
            letterSpacing: 'normal',
        },
        h4: {
            fontWeight: 400,
            fontStyle: 'normal',
            marginBottom: defaultTheme.spacing(1)
        },
        h5: {
            fontWeight: 400,
            fontStyle: 'normal',
            letterSpacing: 'normal',
            marginBottom: defaultTheme.spacing(1)
        },
        h6: {
            fontWeight: 400,
            fontStyle: 'normal',
            marginBottom: defaultTheme.spacing(1)
        },
    },
    palette: {
        ...defaultTheme.palette,
        ...palette
    },
    overrides: {
        MuiTableCell: {
            head: {
                fontWeight: 'bold'
            }
        }
    }
});

export default responsiveFontSizes(theme);
