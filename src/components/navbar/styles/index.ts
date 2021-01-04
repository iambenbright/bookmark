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
    color: theme.palette.text.primary,
    '&:hover': {
      textDecoration: 'none',
    },
  },
  login: {
    paddingLeft: 20,
    paddingRight: 20,
  },
}));

export default useStyles;
