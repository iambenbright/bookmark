import React, { useState } from 'react';

// material-ui
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// components
import NestedContainer from '../../common/components/container';
import { FacebookIcon, TwitterIcon } from './components';
import NavLinks from '../../common/components/navLinks';

// svgs
import BookmarkLogo from '../../assets/images/logo-bookmark-white.svg';

// styles
import useStyles from './styles';

export default function Footer() {
  const [email, setEmail] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);

  const theme = useTheme();
  const classes = useStyles();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

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
            Stay up-to-date with what {matchesMD && <br />} we’re doing
          </Typography>
          <form className={classes.form}>
            {!isValid && (
              <Fade in={!isValid}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className={classes.errorIcon}
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
              InputProps={{ disableUnderline: true }}
              helperText={
                !isValid && (
                  <Fade in={!isValid}>
                    <span className={classes.errorText}>
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
              <NavLinks atBottom={true} />
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
