import { createMuiTheme } from '@material-ui/core';

import { typography } from './typography';
import { palette } from './palette';
import { props } from './props';
import { overrides } from './overrides';

export default createMuiTheme({
  palette,
  typography,
  props,
  overrides,
});
