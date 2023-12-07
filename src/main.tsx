import './styles/global.css';
import ReactDOM from 'react-dom/client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend as backend } from 'react-dnd-html5-backend';

import App from './App';
import AppStateProvider from './store/app-state-context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <DndProvider backend={backend}>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </DndProvider>,
);
