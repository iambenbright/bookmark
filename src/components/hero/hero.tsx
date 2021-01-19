import React from 'react';

// material-ui
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// components
import { NestedContainer } from '../../common';

// svg
import HeroIllustration from '../../assets/images/illustration-hero.svg';

// styles
import useStyles from './styles';

export default function Hero() {
  const classes = useStyles();
  const theme = useTheme();
  const isMedUp = useMediaQuery(theme.breakpoints.up('md'));
  const isLargeUp = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <NestedContainer>
      <Box className={classes.hero}>
        <Box className={classes.heroRight}>
          <Box className={classes.illustration}>
            <img src={HeroIllustration} alt="" />
          </Box>
          <Box className={classes.pillRight} />
        </Box>
        <Box className={classes.heroLeft}>
          <Typography variant="h3" className={classes.middleFixed}>
            A Simple Bookmark {isMedUp && <br />} Manager
          </Typography>
          <Typography className={classes.middleFixed}>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly.
            {isLargeUp && <br />} Try it for free.
          </Typography>
          <Box className={classes.heroButtons}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.buttonLeft}
            >
              Get it on Chrome
            </Button>
            <Button variant="contained" color="default" size="large">
              Get it on FireFox
            </Button>
          </Box>
        </Box>
      </Box>
    </NestedContainer>
  );
}
