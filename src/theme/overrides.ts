import { createMuiTheme } from '@material-ui/core';
import { Overrides } from '@material-ui/core/styles/overrides';

// default theme
const theme = createMuiTheme();

export const overrides: Overrides = {
  MuiCssBaseline: {
    '@global': {
      body: {
        position: 'relative',
        overflowX: 'hidden',
      },
    },
  },
  MuiButton: {
    root: {
      textTransform: 'none',
    },
  },
  MuiTabs: {
    flexContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
    },
    indicator: {
      height: 4,
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
  },
  MuiTab: {
    root: {
      textTransform: 'capitalize',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.15rem',
        borderTop: `1px solid ${theme.palette.grey['400']}`,
        '&:last-of-type': {
          borderBottom: `1px solid ${theme.palette.grey['400']}`,
        },
        maxWidth: '100%',
        padding: 0,
        minHeight: 'auto',
        '&$selected $wrapper': {
          borderBottom: `4px solid ${theme.palette.secondary.main}`,
        },
      },
    },
    wrapper: {
      [theme.breakpoints.down('sm')]: {
        width: 'max-content',
        height: '100%',
        padding: 12,
      },
    },
  },
};
