import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
    return {
        root: {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.background.paper,
            width: '100%',
        },
        subList: {
            paddingLeft: theme.spacing(2),
        },
    };
});
