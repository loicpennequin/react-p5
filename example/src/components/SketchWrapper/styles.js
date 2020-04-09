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
        description: {
            '& strong': {
                color: theme.palette.primary.light,
                borderTop: `solid 1px ${theme.palette.divider}`,
                display: 'block',
                paddingTop: theme.spacing(1),
            },
            '& p[data-description]': {
                fontSize: '1.15em',
            },
            '& h2': {
                fontWeight: theme.typography.h3.fontWeight,

                '&:first-of-type': {
                    ...theme.typography.h3,
                    borderBottom: `solid 3px ${theme.palette.primary.main}`,
                },
            },
            '& code': {
                backgroundColor: theme.palette.background.default,
                color: theme.palette.primary.dark,
            },
        },
        panel: {
            flex: 1,
        },
    };
});
