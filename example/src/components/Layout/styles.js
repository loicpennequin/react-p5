import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
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
