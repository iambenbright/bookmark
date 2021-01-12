import { darken, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  container: {
    overflow: 'hidden',
    padding: 0,
    marginTop: 100,
  },
  footerBottom: {
    color: theme.palette.common.white,
    backgroundColor: darken(theme.palette.primary.main, 0.8),
    paddingTop: 50,
    paddingBottom: 50,
    [theme.breakpoints.up('md')]: {
      paddingTop: 10,
      paddingBottom: 10,
    },
  },
  footerBottomGridContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  footerLeft: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'center',
      '& img': {
        marginRight: 40,
      },
    },
  },
  socialIcon: {
    '& img:first-of-type': {
      marginRight: 50,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
    },
  },
  footerNavLinks: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
    },
    '& .MuiListItem-root': {
      justifyContent: 'center',
      letterSpacing: 3,
      '&:not(:last-of-type)': {
        marginBottom: 15,
        [theme.breakpoints.up('md')]: {
          marginBottom: 0,
        },
      },
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  footerTop: {
    backgroundColor: theme.palette.primary.main,
  },
  middleFixed: {
    minHeight: 300,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 70,
      paddingBottom: 70,
    },
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
  subTitle: {
    color: theme.palette.common.white,
    letterSpacing: '3px',
  },
  title: {
    marginTop: 20,
    color: theme.palette.common.white,
  },
  form: {
    marginTop: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  textFieldRoot: {
    marginTop: 0,
    flex: 1,
    '& .MuiInputBase-root': {
      marginTop: 0,
    },
    '& .MuiFilledInput': {
      '&-input': {
        backgroundColor: theme.palette.common.white,
        padding: '12px 12px',
        borderRadius: 4,
      },
      '&-underline:after, &-underline:before': {
        display: 'none',
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      marginRight: 10,
    },
  },
  button: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: 10,
    },
  },
}));
