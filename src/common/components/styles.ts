import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  nav: {
    '& a:not(:last-of-type)': {
      marginRight: 20,
    },
  },
  bottomNav: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 20,
      '& a:not(:last-of-type)': {
        marginRight: 0,
        marginBottom: 20,
      },
    },
  },
  link: {
    cursor: 'pointer',
    letterSpacing: 2.5,
    color: theme.palette.grey['800'],
    '&:hover': {
      textDecoration: 'none',
      '&.MuiLink-root': {
        color: theme.palette.secondary.main,
      },
    },
  },
  bottomLink: {
    color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
}));
