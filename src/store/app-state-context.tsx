import React, { createContext } from 'react';
import { useImmerReducer } from 'use-immer';

import type { Action } from './action';
import type { DragItem } from '../types/DragItem';
import { appStateReducer, List, Task } from './reducer';

type AppStateContextProps = {
  draggedItem: DragItem;
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: React.Dispatch<Action>;
};

export const AppStateContext = createContext({} as AppStateContextProps);

const initialState = {
  lists: [
    {
      id: '0',
      text: 'Todo',
      tasks: [{ id: 'c0', text: 'Generate app Scaffold' }],
    },
    {
      id: '1',
      text: 'In Progress',
      tasks: [{ id: 'c2', text: 'Learning TypeScript' }],
    },
    {
      id: '2',
      text: 'Done',
      tasks: [{ id: 'c3', text: 'Begin to use static typing' }],
    },
  ],
  draggedItem: null,
};

export default function AppStateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useImmerReducer(appStateReducer, initialState);

  const { draggedItem, lists } = state;
  const getTasksByListId = (id: string) =>
    lists.find((list) => list.id === id)?.tasks || [];

  const values = {
    draggedItem,
    lists,
    getTasksByListId,
    dispatch,
  };

  return (
    <AppStateContext.Provider value={values}>
      {children}
    </AppStateContext.Provider>
  );
}
