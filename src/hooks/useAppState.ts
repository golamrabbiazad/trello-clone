import { useContext } from 'react';
import { AppStateContext } from '../store/app-state-context';

export const useAppState = () => {
  const context = useContext(AppStateContext);

  if (!context) {
    throw new Error('useAppState must be with in the AppStateProvider');
  }

  return context;
};
