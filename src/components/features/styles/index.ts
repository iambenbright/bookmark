import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  tabletConstraint: {
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      width: '65%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    [theme.breakpoints.up('md')]: {
      width: '55%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '45%',
    },
  },
  feature: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 100,
    [theme.breakpoints.up('md')]: {
      marginTop: 150,
      flexDirection: 'row',
      gap: 100,
    },
  },
  featureBody: {
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      width: 'auto',
      marginLeft: 0,
      marginRight: 0,
    },
  },
  panelRight: {
    textAlign: 'center',
    flex: 1,
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      order: 2,
    },
  },
  panelLeft: {
    flex: 1,
    position: 'relative',
    marginTop: 80,
    [theme.breakpoints.up('sm')]: {
      marginTop: 200,
    },
    [theme.breakpoints.up('md')]: {
      order: 2,
      marginTop: 0,
    },
  },
  svg: {
    position: 'relative',
    paddingBottom: '50%',
    '& img': {
      position: 'absolute',
      top: '-70px',
      left: 0,
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
      [theme.breakpoints.only('sm')]: {
        top: '-130px',
      },
    },
  },
  pillLeft: {
    height: 220,
    width: '120%',
    position: 'relative',
    transform: 'translateX(-26%) translateY(-135px)',
    backgroundColor: theme.palette.primary.main,
    borderTopRightRadius: 150,
    borderBottomRightRadius: 150,
    zIndex: -1,
    [theme.breakpoints.up('sm')]: {
      height: 370,
      transform: 'translateX(-26%) translateY(-200px)',
    },
    [theme.breakpoints.up('md')]: {
      height: 240,
      transform: 'translateX(-26%) translateY(-120px)',
    },
    [theme.breakpoints.up('lg')]: {
      height: 280,
      transform: 'translateX(-26%) translateY(-150px)',
    },
  },
}));
