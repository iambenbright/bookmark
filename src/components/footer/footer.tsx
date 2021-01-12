import React from 'react';

// material-ui
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// components
import NestedContainer from '../../common/components/container';

// svgs
import BookmarkLogo from '../../assets/images/logo-bookmark-white.svg';
import FacebookIcon from '../../assets/images/icon-facebook.svg';
import TwitterIcon from '../../assets/images/icon-twitter.svg';

// styles
import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Box className={classes.footerTop}>
        <NestedContainer className={classes.middleFixed}>
          <Typography
            variant="subtitle1"
            classes={{ subtitle1: classes.subTitle }}
          >
            35,000+ ALREADY JOINED
          </Typography>
          <Typography variant="h4" classes={{ h4: classes.title }}>
            Stay up-to-date with what <br /> we’re doing
          </Typography>
          <form className={classes.form}>
            <TextField
              variant="filled"
              placeholder="Enter your email address"
              type="text"
              classes={{ root: classes.textFieldRoot }}
            />
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.button}
            >
              Contact Us
            </Button>
          </form>
        </NestedContainer>
      </Box>
      <Box className={classes.footerBottom}>
        <NestedContainer>
          <Grid container className={classes.footerBottomGridContainer}>
            <Grid item className={classes.footerLeft}>
              <Box>
                <img src={BookmarkLogo} alt="bookmark logo" />
              </Box>
              <List classes={{ root: classes.footerNavLinks }}>
                <ListItem>FEATURES</ListItem>
                <ListItem>PRICING</ListItem>
                <ListItem>CONTACT</ListItem>
              </List>
            </Grid>
            <Grid item className={classes.socialIcon}>
              <img src={FacebookIcon} alt="facebook icon" />
              <img src={TwitterIcon} alt="twitter icon" />
            </Grid>
          </Grid>
        </NestedContainer>
      </Box>
    </Container>
  );
}
