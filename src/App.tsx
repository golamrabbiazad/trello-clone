import { AppContainer } from './styles';
import { Column } from './components/Column';
import { AddNewItem } from './components/AddNewItem';
import CustomDragLayer from './components/CustomDragLayer';
import { useAppState } from './hooks/useAppState';

const App = () => {
  const { lists, dispatch } = useAppState();

  return (
    <AppContainer>
      <CustomDragLayer />
      {lists.map((list, i) => (
        <Column id={list.id} text={list.text} key={list.id} index={i} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add Another list"
        onAdd={(text) => dispatch({ type: 'ADD_LIST', payload: text })}
      />
    </AppContainer>
  );
};

export default App;
