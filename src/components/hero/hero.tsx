import React from 'react';

// material-ui
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { isWidthUp } from '@material-ui/core';

// components
import NestedContainer from '../../common/components/container';

// svg
import HeroIllustration from '../../assets/images/illustration-hero.svg';

// styles
import useStyles from './styles';

export default function Hero() {
  const classes = useStyles();

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
            A Simple Bookmark {isWidthUp('md', 'lg', true) && <br />} Manager
          </Typography>
          <Typography className={classes.middleFixed}>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly.{' '}
            {isWidthUp('md', 'lg', true) && <br />}Try it for free.
          </Typography>
          <Box mt="30px">
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
