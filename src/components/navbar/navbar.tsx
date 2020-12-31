import React from 'react';

// material-ui components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderRounded';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';

// styles
import useStyles from './styles';

function BrandLogo() {
  const classes = useStyles();

  return (
    <IconButton className={classes.brandLogoRoot}>
      <BookmarkIcon className={classes.brandLogo} />
    </IconButton>
  );
}

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.root}
      position="static"
      elevation={0}
      color="transparent"
    >
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbox}>
          <Button
            className={classes.brandRoot}
            startIcon={<BrandLogo />}
            variant="text"
          >
            BOOKMARK
          </Button>
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
      </Container>
    </AppBar>
  );
}
