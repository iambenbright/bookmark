import React from 'react';

// material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

// components
import NestedContainer from '../../common/components/container';
import NavLinks from '../../common/components/navLinks';

// svg
import BookmarkLogo from '../../assets/images/logo-bookmark.svg';
import HamburgerIcon from '../../assets/images/icon-hamburger.svg';

// styles
import useStyles from './styles';

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.root}
      position="static"
      elevation={0}
      color="transparent"
    >
      <NestedContainer>
        <Toolbar className={classes.toolbox}>
          <img src={BookmarkLogo} width="148" height="25" alt="bookmark logo" />
          <Hidden mdUp>
            <img
              src={HamburgerIcon}
              width="18"
              height="15"
              alt="hamburger icon"
              style={{ cursor: 'pointer' }}
            />
          </Hidden>
          <Hidden smDown>
            <div className={classes.navbarRight}>
              <NavLinks />
              <Button
                className={classes.login}
                color="secondary"
                variant="contained"
                size="large"
              >
                Login
              </Button>
            </div>
          </Hidden>
        </Toolbar>
      </NestedContainer>
    </AppBar>
  );
}
