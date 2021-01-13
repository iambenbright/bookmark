import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
  hero: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 40,
    [theme.breakpoints.up('md')]: {
      marginTop: 80,
      height: 400,
      flexDirection: 'row',
      gap: 30,
    },
  },
  middleFixed: {
    marginTop: 20,
    [theme.breakpoints.only('sm')]: {
      width: '55%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroLeft: {
    marginTop: '-40px',
    textAlign: 'center',
    flex: 1,
    [theme.breakpoints.up('sm')]: {
      marginTop: '-120px',
      '& h5': {
        fontSize: '1.75rem',
      },
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      marginTop: 20,
    },
  },
  buttonLeft: {
    marginRight: 8,
    [theme.breakpoints.up('sm')]: {
      marginRight: 15,
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
  pillRight: {
    height: 170,
    width: '120%',
    position: 'relative',
    transform: 'translateX(26%) translateY(-90px)',
    zIndex: -1,
    backgroundColor: theme.palette.primary.main,
    borderTopLeftRadius: 150,
    borderBottomLeftRadius: 150,
    [theme.breakpoints.up('sm')]: {
      height: 370,
      transform: 'translateX(26%) translateY(-200px)',
    },
    [theme.breakpoints.up('md')]: {
      height: 240,
      transform: 'translateX(26%) translateY(-120px)',
    },
    [theme.breakpoints.up('lg')]: {
      height: 280,
      transform: 'translateX(18%) translateY(-150px)',
    },
  },
}));
