import { DragItem } from '../types/DragItem';

type SET_DRAGGED_ITEM = {
  type: 'SET_DRAGGED_ITEM';
  payload: DragItem;
};

type ADD_LIST = { type: 'ADD_LIST'; payload: string };

type ADD_TASK = {
  type: 'ADD_TASK';
  payload: {
    text: string;
    listId: string;
  };
};

type MOVE_LIST = {
  type: 'MOVE_LIST';
  payload: {
    draggedId: string;
    hoverId: string;
  };
};

type MOVE_TASK = {
  type: 'MOVE_TASK';
  payload: {
    draggedItemId: string;
    hoverItemId: string;
    sourceColumnId: string;
    targetColumnId: string;
  };
};

export const setDraggedItem = (item: DragItem) => ({
  type: 'SET_DRAGGED_ITEM',
  payload: item,
});

export const addList = (text: string) => ({
  type: 'ADD_LIST',
  payload: text,
});

export const addTask = (text: string, listId: string) => ({
  type: 'ADD_TASK',
  payload: { text, listId },
});

export const moveList = (draggedId: string, hoverId: string) => ({
  type: 'MOVE_LIST',
  payload: {
    draggedId,
    hoverId,
  },
});

export const moveTask = (
  draggedItemId: string,
  hoverItemId: string,
  sourceColumnId: string,
  targetColumnId: string,
) => ({
  type: 'MOVE_TASK',
  payload: {
    draggedItemId,
    hoverItemId,
    sourceColumnId,
    targetColumnId,
  },
});

export type Action =
  | SET_DRAGGED_ITEM
  | ADD_LIST
  | ADD_TASK
  | MOVE_LIST
  | MOVE_TASK;
