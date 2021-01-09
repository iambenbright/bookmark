import { createMuiTheme } from '@material-ui/core';
import { Palette } from '@material-ui/core/styles/createPalette';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

// default theme
const theme = createMuiTheme();

export const typography = (palette: Palette): TypographyOptions => ({
  fontFamily: 'Rubik',
  allVariants: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  h4: {
    fontWeight: 500,
    color: palette.grey['900'],
  },
  h5: {
    fontWeight: 500,
    color: palette.grey['900'],
  },
  body1: {
    fontWeight: 400,
    color: palette.grey['700'],
    marginTop: 20,
  },
  body2: {
    fontWeight: 400,
    color: palette.grey['700'],
    marginTop: 20,
  },
  subtitle1: {
    fontWeight: 400,
    color: palette.grey['800'],
  },
  subtitle2: {
    fontWeight: 400,
    color: palette.grey['800'],
  },
});
