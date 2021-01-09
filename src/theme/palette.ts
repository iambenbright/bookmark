import grey from '@material-ui/core/colors/grey';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

export const palette: PaletteOptions = {
  type: 'light',
  /** soft blue */
  primary: {
    main: 'hsl(231, 69%, 60%)',
  },
  /** soft red */
  secondary: {
    main: 'hsl(0, 94%, 66%)',
  },
  grey: {
    '700': grey['700'],
    '800': grey['800'],
    '900': grey['900'],
  },
};
