import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
    console.log(theme);
    return {
        root: {
            minHeight: '100vh',
            display: 'grid',
            gridTemplateColumns: 'minmax(auto, 300px) 1fr',
            gridTemplateRows: 'auto 1fr',
            [theme.breakpoints.down('sm')]: {
                gridTemplateColumns: '1fr',
            },
        },
        main: {
            [theme.breakpoints.down('sm')]: {
                paddingLeft: '0 !important',
                paddingRight: '0 !important',
            },
        },
        header: {
            gridColumn: 'span 2',
        },
    };
});
