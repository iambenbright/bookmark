import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  nav: {
    '& a:not(:last-of-type)': {
      marginRight: 20,
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
  bottomNav: {
    color: theme.palette.common.white,
  },
}));
