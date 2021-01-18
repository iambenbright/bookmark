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
  toolboxElevated: {
    zIndex: 2000,
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
  backdrop: {
    alignItems: 'flex-start',
    backgroundColor: 'rgba(12, 20, 65, 0.85)',
    paddingLeft: 30,
    paddingRight: 30,
    zIndex: 1000,
  },
  mobileNav: {
    marginTop: 120,
    width: '100%',
    fontSize: '1rem',
  },
  mobileBtn: {
    color: 'white',
    border: '2px solid white',
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: '1rem',
    letterSpacing: '3px',
    '&:hover': {
      color: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
    },
  },
}));

export default useStyles;
