import React from 'react';

// material-ui
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

// pages
import { Landing } from '../../pages/landing';

const generateClassNames = createGenerateClassName({
  productionPrefix: 'bmk',
});

export default function App() {
  return (
    <StylesProvider generateClassName={generateClassNames}>
      <Landing />
    </StylesProvider>
  );
}
