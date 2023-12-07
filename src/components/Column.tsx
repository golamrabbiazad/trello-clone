import { useRef } from 'react';
import { useDrop } from 'react-dnd';

import { Card } from './Card';
import { AddNewItem } from './AddNewItem';
import { isHidden } from '../utils/isHidden';
import { DragItem } from '../types/DragItem';
import { useItemDrag } from '../hooks/useItemDrag';
import { useAppState } from '../hooks/useAppState';
import { ColumnContainer, ColumnTitle } from '../styles';

type ColumnProps = {
  text: string;
  index: number;
  id: string;
  isPreview?: boolean;
};

export const Column = ({ text, index, id, isPreview }: ColumnProps) => {
  const { draggedItem, lists, dispatch } = useAppState();
  const [, drop] = useDrop({
    accept: ['COLUMN', 'CARD'],
    hover(item: DragItem) {
      if (item.type === 'COLUMN') {
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) return;

        dispatch({
          type: 'MOVE_LIST',
          payload: { dragIndex, hoverIndex },
        });
        item.index = hoverIndex;
      } else {
        const dragIndex = item.index;
        const hoverIndex = 0;
        const sourceColumn = item.columnId;
        const targetColumn = id;

        if (sourceColumn === targetColumn) {
          return;
        }

        dispatch({
          type: 'MOVE_TASK',
          payload: { dragIndex, hoverIndex, sourceColumn, targetColumn },
        });

        item.index = hoverIndex;
        item.columnId = targetColumn;
      }
    },
  });

  const ref = useRef<HTMLDivElement>(null);

  const { drag } = useItemDrag({ type: 'COLUMN', id, index, text });

  drag(drop(ref));

  return (
    <ColumnContainer
      isPreview={isPreview}
      ref={ref}
      isHidden={isHidden(isPreview, draggedItem, 'COLUMN', id)}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {lists[index].tasks.map((task, i) => (
        <Card
          text={task.text}
          key={task.id}
          index={i}
          id={task.id}
          columnId={id}
        />
      ))}
      <AddNewItem
        toggleButtonText="+ Add anthter task"
        onAdd={(text) =>
          dispatch({ type: 'ADD_TASK', payload: { text, listId: id } })
        }
        dark
      />
    </ColumnContainer>
  );
};
