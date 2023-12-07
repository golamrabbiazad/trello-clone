import { nanoid } from 'nanoid';

import type { Action } from './action';
import type { DragItem } from '../types/DragItem';
import { findItemIndexById, moveItem } from '../utils/arrayUtils';

export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

type AppState = {
  draggedItem: DragItem;
  lists: List[];
};

export const appStateReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'SET_DRAGGED_ITEM': {
      state.draggedItem = action.payload;
      break;
    }
    case 'ADD_LIST': {
      state.lists.push({
        id: nanoid(),
        text: action.payload,
        tasks: [],
      });

      break;
    }
    case 'ADD_TASK': {
      const { text, listId } = action.payload;
      const targetListIndex = findItemIndexById(state.lists, listId);

      state.lists[targetListIndex].tasks.push({
        id: nanoid(),
        text,
      });

      break;
    }
    case 'MOVE_LIST': {
      const { draggedId, hoverId } = action.payload;
      const dragIndex = findItemIndexById(state.lists, draggedId);
      const hoverIndex = findItemIndexById(state.lists, hoverId);

      state.lists = moveItem(state.lists, dragIndex, hoverIndex);
      break;
    }
    case 'MOVE_TASK': {
      const { draggedItemId, hoverItemId, sourceColumnId, targetColumnId } =
        action.payload;
      const sourceListIndex = findItemIndexById(state.lists, sourceColumnId);
      const targetListIndex = findItemIndexById(state.lists, targetColumnId);
      const dragIndex = findItemIndexById(
        state.lists[sourceListIndex].tasks,
        draggedItemId,
      );
      const hoverIndex = hoverItemId
        ? findItemIndexById(state.lists[targetListIndex].tasks, hoverItemId)
        : 0;
      const item = state.lists[sourceListIndex].tasks[dragIndex];
      // Remove the task from the source list
      state.lists[sourceListIndex].tasks.splice(dragIndex, 1);
      // Add the task to the target list
      state.lists[targetListIndex].tasks.splice(hoverIndex, 0, item);
    }
  }
};
