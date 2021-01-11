import React, { Fragment } from 'react';

// material-ui
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// components
import { NavBar } from '../../components/navbar';
import { Hero } from '../../components/hero';
import { Features } from '../../components/features';
import { Extensions } from '../../components/extensions';
import { FAQ } from '../../components/FAQ';

export default function Landing() {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <NavBar />
        <Hero />
        <Features />
        <Extensions />
        <FAQ />
      </Container>
    </Fragment>
  );
}
