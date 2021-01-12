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
    '&:hover': {},
  },
  accordionSummary: {
    padding: 0,
  },
  accordionDetails: {
    padding: 0,
  },
  summaryBody: {
    marginTop: 0,
    color: theme.palette.grey['900'],
  },
  detailBody: {
    textAlign: 'left',
  },
  containedPrimary: {
    marginTop: 50,
  },
  middleFixed: {
    marginTop: 100,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      width: '65%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    [theme.breakpoints.up('md')]: {
      width: '55%',
    },
  },
}));
