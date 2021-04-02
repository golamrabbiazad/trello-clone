import type { DragItem } from 'src/DragItem';

export type Action =
  | {
      type: 'SET_DRAGGED_ITEM';
      payload: DragItem | null;
    }
  | { type: 'ADD_LIST'; payload: string }
  | {
      type: 'ADD_TASK';
      payload: {
        text: string;
        listId: string;
      };
    }
  | {
      type: 'MOVE_LIST';
      payload: {
        dragIndex: number;
        hoverIndex: number;
      };
    }
  | {
      type: 'MOVE_TASK';
      payload: {
        dragIndex: number;
        hoverIndex: number;
        sourceColumn: string;
        targetColumn: string;
      };
    };

export const setDraggedItem = (draggedItem: DragItem | null): Action => ({
  type: 'SET_DRAGGED_ITEM',
  payload: draggedItem,
});
