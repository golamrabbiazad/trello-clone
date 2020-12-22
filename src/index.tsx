import React from 'react';
import { render } from 'react-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend as Backend } from 'react-dnd-html5-backend';
import { AppStateProvider } from './AppStateContext';
import App from './App';
import './index.css';

render(
  <DndProvider backend={Backend}>
    <AppStateProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AppStateProvider>
  </DndProvider>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
