import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { AppStateProvider } from './AppStateContext';
import './index.css';

render(
  <AppStateProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppStateProvider>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
