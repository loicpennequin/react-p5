import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
    return {
        canvas: {
            display: 'block',
            boxShadow: theme.shadows[4],
            margin: `${theme.spacing(2)}px 0`,
        },
        description: {
            '& p[data-description]': {
                fontSize: '1.15em',
            },
            '& h2': {
                fontWeight: theme.typography.h3.fontWeight,

                '&:first-of-type': {
                    ...theme.typography.h3,
                    borderBottom: `solid 3px ${theme.palette.primary.light}`,
                },
            },
        },
        panel: {
            flex: 1,
        },
    };
});
