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
import Link from '@material-ui/core/Link';
import SvgIcon from '@material-ui/core/SvgIcon';

// components
import NestedContainer from '../../common/components/container';

// svgs
import BookmarkLogo from '../../assets/images/logo-bookmark-white.svg';

// styles
import useStyles from './styles';

// // social icons
const FacebookIcon = function () {
  const classes = useStyles();

  return (
    <SvgIcon classes={{ root: classes.facebookIcon }}>
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
      />
    </SvgIcon>
  );
};

const TwitterIcon = function () {
  const classes = useStyles();

  return (
    <SvgIcon classes={{ root: classes.twitterIcon }}>
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"
      />
    </SvgIcon>
  );
};

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
                <ListItem>
                  <Link>FEATURES</Link>
                </ListItem>
                <ListItem>
                  <Link>PRICING</Link>
                </ListItem>
                <ListItem>
                  <Link>CONTACT</Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item className={classes.socialIcons}>
              <FacebookIcon />
              <TwitterIcon />
            </Grid>
          </Grid>
        </NestedContainer>
      </Box>
    </Container>
  );
}
