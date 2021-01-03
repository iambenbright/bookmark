import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
  hero: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  heroLeft: {
    textAlign: 'center',
    marginTop: 120,
    flex: 1,
    [theme.breakpoints.up('sm')]: {
      marginTop: 220,
      '& h5': {
        paddingRight: 50,
        fontSize: '1.75rem',
      },
      '& p': {
        paddingRight: 50,
      },
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      marginTop: 0,
      paddingTop: 100,
      marginRight: 20,
    },
    [theme.breakpoints.up('lg')]: {
      '& h5': {
        paddingRight: 200,
      },
    },
  },
  heroRight: {
    position: 'relative',
    flex: 1,
    [theme.breakpoints.up('md')]: {
      order: 2,
    },
  },
  illustration: {
    position: 'relative',
    paddingBottom: '50%',

    '& img': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
    },
  },
  pill: {
    height: 170,
    width: '90%',
    position: 'absolute',
    top: '35%',
    right: '-10%',
    zIndex: -1,
    backgroundColor: theme.palette.primary.main,
    borderTopLeftRadius: 150,
    borderBottomLeftRadius: 150,
    [theme.breakpoints.up('sm')]: {
      height: 370,
      top: 120,
    },
    [theme.breakpoints.up('md')]: {
      height: 240,
      width: '80%',
      top: 80,
      right: 0,
    },
    [theme.breakpoints.up('lg')]: {
      height: 280,
      top: 100,
    },
  },
}));
