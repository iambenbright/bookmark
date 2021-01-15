import React, { useRef, useState } from 'react';

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
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Fade from '@material-ui/core/Fade';

// components
import NestedContainer from '../../common/components/container';
import { FacebookIcon, TwitterIcon } from './components';

// svgs
import BookmarkLogo from '../../assets/images/logo-bookmark-white.svg';

// styles
import useStyles from './styles';

export default function Footer() {
  const [email, setEmail] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);
  const spanRef = useRef().current;
  const svgRef = useRef().current;

  const theme = useTheme();
  const classes = useStyles();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('sm'));

  const validateEmail = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (email.length === 0) {
      return;
    }

    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isEmail = pattern.test(email.toLowerCase());

    if (isEmail) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

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
            {!isValid && (
              <Fade in={!isValid}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className={classes.errorIcon}
                  ref={svgRef}
                >
                  <g fill="none" fillRule="evenodd">
                    <circle cx="10" cy="10" r="10" fill="#FA5959" />
                    <g fill="#FFF" transform="translate(9 5)">
                      <rect width="2" height="7" rx="1" />
                      <rect width="2" height="2" y="8" rx="1" />
                    </g>
                  </g>
                </svg>
              </Fade>
            )}
            <TextField
              classes={{ root: classes.textFieldRoot }}
              variant="filled"
              placeholder="Enter your email address"
              type="email"
              value={email}
              onChange={handleChange}
              helperText={
                !isValid && (
                  <Fade in={!isValid}>
                    <span ref={spanRef} className={classes.errorText}>
                      Whoops, make sure it's an email
                    </span>
                  </Fade>
                )
              }
              style={{
                outline: !isValid
                  ? `${theme.palette.secondary.main} outset thin`
                  : '',
              }}
            />
            <Button
              type="submit"
              onClick={validateEmail}
              variant="contained"
              color="secondary"
              size="large"
              className={classes.contactUs}
              style={{ marginTop: isMobileOrTablet ? (isValid ? 0 : 40) : 0 }}
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
                  <Link href="/features" onClick={preventDefault}>
                    FEATURES
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/pricing" onClick={preventDefault}>
                    PRICING
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/contact" onClick={preventDefault}>
                    CONTACT
                  </Link>
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
