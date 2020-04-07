import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ed225d',
        },
        contrastThreshold: 3,

        tonalOffset: 0.2,
        background: {
            default: '#f5f5f5',
        },
    },
});
