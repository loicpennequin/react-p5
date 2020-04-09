import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
    return {
        canvas: {
            display: 'block',
            boxShadow: theme.shadows[4],
            margin: `${theme.spacing(2)}px auto`,
        },
        cardContent: {
            [theme.breakpoints.down('sm')]: {
                padding: theme.spacing(1),
            },
        },
        description: {},
        panel: {
            flex: 1,
        },
    };
});
