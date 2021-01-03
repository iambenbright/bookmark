import React, { Fragment } from 'react';

// material-ui components
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// components
import { NavBar } from '../../components/navbar';
import { Hero } from '../../components/hero';

export default function Landing() {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <NavBar />
        <Hero />
      </Container>
    </Fragment>
  );
}
