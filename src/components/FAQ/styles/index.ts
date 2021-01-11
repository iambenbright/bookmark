import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  accordion: {
    position: 'relative',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    '&:nth-child(1)': {
      borderTop: '1px solid rgba(0,0,0,0.12)',
    },
    '&:nth-child(4)': {
      borderBottom: '1px solid rgba(0,0,0,0.12)',
    },
  },
  accordionSummary: {
    padding: 0,
  },
  body1: {
    marginTop: 0,
    textAlign: 'left',
  },
  containedPrimary: {
    marginTop: 50,
  },
  tabletConstraint: {
    marginTop: 100,
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
      width: '50%',
    },
  },
}));
