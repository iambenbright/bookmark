import { darken, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  container: {
    overflow: 'hidden',
    padding: 0,
  },
  footerBottom: {
    color: theme.palette.common.white,
    backgroundColor: darken(theme.palette.primary.main, 0.75),
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
  facebookIcon: {
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  twitterIcon: {
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  socialIcons: {
    minWidth: 100,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    cursor: 'pointer',
    color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
    },
  },
  footerNavLinks: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
    },
    '& .MuiListItem-root': {
      cursor: 'pointer',
      justifyContent: 'center',
      letterSpacing: 3,
      '&:not(:last-of-type)': {
        marginBottom: 15,
        [theme.breakpoints.up('md')]: {
          marginBottom: 0,
        },
      },
      '& .MuiLink-root': {
        color: theme.palette.common.white,
        '&:hover': {
          textDecoration: 'none',
          color: theme.palette.secondary.main,
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
    paddingTop: 100,
    paddingBottom: 100,
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
    position: 'relative',
    marginTop: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  errorIcon: {
    position: 'absolute',
    zIndex: 10,
    transform: 'translatex(140px) translateY(-40px)',
    [theme.breakpoints.up(423)]: {
      transform: 'translatex(160px) translateY(-40px)',
    },
    [theme.breakpoints.up('sm')]: {
      transform: 'translatex(200px) translateY(-40px)',
    },
    [theme.breakpoints.up('md')]: {
      transform: 'translatex(70px) translateY(0)',
    },
    [theme.breakpoints.up('lg')]: {
      transform: 'translateX(80px)',
    },
  },
  errorText: {
    width: '100%',
    fontSize: '0.9rem',
    position: 'absolute',
    bottom: '-22px',
    left: 0,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    borderRadius: 4,
    padding: '2px 10px',
    fontStyle: 'italic',
  },
  textFieldRoot: {
    position: 'relative',
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
  contactUs: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: 10,
    },
  },
}));
