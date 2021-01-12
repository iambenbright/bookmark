import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  cardsWrapper: {
    [theme.breakpoints.up('md')]: {
      marginTop: 50,
    },
  },
  cardWrapper: {
    [theme.breakpoints.up('md')]: {
      '&:nth-child(2)': {
        marginTop: 40,
      },
      '&:nth-child(3)': {
        marginTop: 80,
      },
    },
  },
  card: {
    textAlign: 'center',
    borderRadius: 12,
    boxShadow:
      '2px 10px 8px 0 rgba(0,0,0, 0.05), 0 -10px 8px 0 rgba(0,0,0, 0), -2px 0 8px 0 rgba(0,0,0,0.05)',
    [theme.breakpoints.down('sm')]: {
      marginTop: 50,
    },
  },
  cardContent: {
    paddingTop: 48,
    paddingBottom: 24,
  },
  cardActions: {
    justifyContent: 'center',
    paddingTop: 32,
    paddingBottom: 32,
  },
  containedPrimary: {
    padding: '10px 26px',
  },
  body2: {
    marginTop: 5,
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
  extensionWrapper: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 100,
    },
  },
}));
