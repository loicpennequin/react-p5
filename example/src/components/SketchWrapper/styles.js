import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
    return {
        canvas: {
            boxShadow: theme.shadows[3],
            margin: `${theme.spacing(2)} 0`,
        },
    };
});
