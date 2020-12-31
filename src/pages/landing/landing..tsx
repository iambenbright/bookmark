import React, { Fragment } from 'react';

// material-ui components
import CssBaseline from '@material-ui/core/CssBaseline';

// components
import { NavBar } from '../../components/navbar';

export default function Landing() {
  return (
    <Fragment>
      <CssBaseline />
      <NavBar />
    </Fragment>
  );
}
