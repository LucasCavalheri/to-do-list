import { useState } from 'react';
import * as C from './App.styles';
import AddArea from './components/AddArea/AddArea';
import ListItem from './components/ListItem/ListItem';
import { Item } from './types/Item';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar pão', done: false },
    { id: 2, name: 'Comprar bolo', done: false },
  ]);

  const handleAddTask = (taskName: string) => {
    // let newList = [...list];
    // newList.push({
    //   id: list.length + 1,
    //   name: taskName,
    //   done: false
    // });
    // setList(newList);
    setList([
      ...list,
      {
        id: list.length + 1,
        name: taskName,
        done: false,
      },
    ]);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        <AddArea onEnter={handleAddTask} />
        {list.map((item, i) => (
          <ListItem key={i} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
