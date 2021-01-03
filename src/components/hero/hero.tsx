import React from 'react';

// material-ui components
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// custom components
import NestedContainer from '../../common/components/container';
import HeroIllustration from '../../assets/images/illustration-hero.svg';

// styles
import useStyles from './styles';

export default function Hero() {
  const classes = useStyles();

  return (
    <NestedContainer>
      <Box className={classes.hero}>
        {/* xs: Top; md: Right */}
        <Box className={classes.heroRight}>
          <Box className={classes.illustration}>
            <img src={HeroIllustration} alt="" />
          </Box>
          <Box className={classes.pill} />
        </Box>
        {/* xs: Bottom; md: Left */}
        <Box className={classes.heroLeft}>
          <Typography variant="h5">A Simple Bookmark Manager</Typography>
          <Typography style={{ marginTop: '20px' }}>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </Typography>
          <Box mt="30px">
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: '15px' }}
            >
              Get it on Chrome
            </Button>
            <Button variant="contained" color="default">
              Get it on FireFox
            </Button>
          </Box>
        </Box>
      </Box>
    </NestedContainer>
  );
}
