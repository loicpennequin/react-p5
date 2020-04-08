import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
    console.log(theme);
    return {
        root: {
            minHeight: '100vh',
            display: 'grid',
            gridTemplateColumns: 'minmax(auto, 300px) 1fr',
            gridTemplateRows: 'auto 1fr',
        },
        header: {
            gridColumn: 'span 2',
        },
        headerTitle: {
            color: 'inherit',
            textDecoration: 'none',
        },
        headerLinks: {
            marginLeft: 'auto',
        },
        list: {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.background.paper,
        },
        subList: {
            paddingLeft: theme.spacing(2),
        },
    };
});
