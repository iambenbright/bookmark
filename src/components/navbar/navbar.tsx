import React from 'react';

// material-ui components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';

// custom-component
import NestedContainer from '../../common/components/container';

// svg
import BookmarkLogo from '../../assets/images/logo-bookmark.svg';

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
          {/* brand log */}
          <img src={BookmarkLogo} alt="" />
          <Hidden mdUp>
            <MenuIcon style={{ fontSize: '40px' }} />
          </Hidden>
          <Hidden smDown>
            <List className={classes.list}>
              <ListItem>
                <Link className={classes.link}>FEATURES</Link>
              </ListItem>
              <ListItem>
                <Link className={classes.link}>PRICING</Link>
              </ListItem>
              <ListItem>
                <Link className={classes.link}>CONTACT</Link>
              </ListItem>
              <ListItem>
                <Button
                  className={classes.login}
                  color="secondary"
                  variant="contained"
                >
                  Login
                </Button>
              </ListItem>
            </List>
          </Hidden>
        </Toolbar>
      </NestedContainer>
    </AppBar>
  );
}
