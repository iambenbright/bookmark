import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '30px 0',
  },
  toolbox: {
    justifyContent: 'space-between',
    paddingLeft: 0,
    paddingRight: 0,
    [theme.breakpoints.up('md')]: {
      paddingRight: 60,
    },
  },
  brandRoot: {
    fontSize: '1.35rem',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  brandLogoRoot: {
    padding: 7,
    marginRight: 10,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  brandLogo: {
    fill: theme.palette.common.white,
  },
  list: {
    display: 'flex',
  },
  link: {
    cursor: 'pointer',
    letterSpacing: 2.5,
    color: theme.palette.text.primary,
    '&:hover': {
      textDecoration: 'none',
      '&.MuiLink-root': {
        color: theme.palette.secondary.main,
      },
    },
  },
  login: {
    paddingLeft: 32,
    paddingRight: 32,
  },
}));

export default useStyles;
