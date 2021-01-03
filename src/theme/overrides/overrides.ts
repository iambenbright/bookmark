import { Overrides } from '@material-ui/core/styles/overrides';

const overrides: Overrides = {
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
};

export default overrides;
