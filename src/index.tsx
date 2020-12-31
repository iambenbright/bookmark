import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';

// fonts
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';

// material-ui components
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
