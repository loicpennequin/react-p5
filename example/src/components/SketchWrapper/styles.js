import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
    return {
        canvas: {
            display: 'block',
            boxShadow: theme.shadows[3],
            margin: `${theme.spacing(2)}px 0`,
        },
        title: {
            borderBottom: `solid 3px ${theme.palette.primary.light}`,
        },
    };
});
