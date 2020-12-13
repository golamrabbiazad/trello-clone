import React from 'react';
import { AddNewItem } from './AddNewItem';
import { Card } from './Card';
import { Column } from './Column';
import { AppContainer } from './styles';

const App = () => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app Scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn TypeScript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>
      <AddNewItem toggleButtonText="+Add Another list" onAdd={console.log} />
    </AppContainer>
  );
};

export default App;
