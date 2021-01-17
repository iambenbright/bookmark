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
  navbarRight: {
    display: 'flex',
    alignItems: 'center',
    '& nav': {
      marginRight: 30,
      '& > a:not(:last-of-type)': {
        marginRight: 30,
      },
    },
  },
  login: {
    paddingLeft: 32,
    paddingRight: 32,
  },
}));

export default useStyles;
