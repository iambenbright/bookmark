import React, { Fragment, useEffect, useState } from 'react';

// material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Backdrop from '@material-ui/core/Backdrop';

// components
import NestedContainer from '../../common/components/container';
import NavLinks from '../../common/components/navLinks';

// svg
import BookmarkLogo from '../../assets/images/logo-bookmark.svg';
import BookmarkLogoWhite from '../../assets/images/logo-bookmark-all-white.svg';
import HamburgerIcon from '../../assets/images/icon-hamburger.svg';
import CloseIcon from '../../assets/images/icon-close.svg';

// styles
import useStyles from './styles';

interface NavProps {
  menuOpen: boolean;
}

function MobileNavigation(props: NavProps) {
  const classes = useStyles();

  const { menuOpen } = props;

  return (
    <div className={classes.mobileNav}>
      <NavLinks menuOpen={menuOpen} />
      <Button
        fullWidth
        variant="outlined"
        size="large"
        className={classes.mobileBtn}
      >
        LOGIN
      </Button>
    </div>
  );
}

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const classes = useStyles();

  useEffect(() => {
    if (menuOpen) {
      document.body.style['overflow'] = 'hidden';
    } else {
      document.body.style['overflow'] = 'scroll';
    }
  }, [menuOpen]);

  return (
    <Fragment>
      <Backdrop
        classes={{ root: classes.backdrop }}
        open={menuOpen}
        children={<MobileNavigation menuOpen={menuOpen} />}
      />
      <AppBar
        className={classes.root}
        position="static"
        elevation={0}
        color="transparent"
      >
        <NestedContainer>
          <Toolbar
            className={`${classes.toolbox} ${
              menuOpen ? classes.toolboxElevated : ''
            }`}
          >
            {menuOpen ? (
              <img
                src={BookmarkLogoWhite}
                width="148"
                height="25"
                alt="bookmark logo"
              />
            ) : (
              <img
                src={BookmarkLogo}
                width="148"
                height="25"
                alt="bookmark logo"
              />
            )}
            <Hidden mdUp>
              {menuOpen ? (
                <img
                  onClick={() => {
                    setMenuOpen(prev => !prev);
                  }}
                  src={CloseIcon}
                  width="18"
                  height="15"
                  alt="close icon"
                  style={{ cursor: 'pointer' }}
                />
              ) : (
                <img
                  onClick={() => {
                    setMenuOpen(prev => !prev);
                  }}
                  src={HamburgerIcon}
                  width="18"
                  height="15"
                  alt="hamburger icon"
                  style={{ cursor: 'pointer' }}
                />
              )}
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
    </Fragment>
  );
}
