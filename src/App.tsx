import React, {useState} from 'react';

import {Container, Content, Header} from './App.styles'

import {Item, HandlePressEnterProps} from './Types/Item'
import {ListItem} from './Components/ListItem'
import { InsertItem } from './Components/InsertItem';


const App = () => {
  const [list, setList] = useState<Item[]>([]) 

  const handlePressEnter = (inputText: HandlePressEnterProps) => {
    setList([...list, inputText])
  }

  const handleInputChecked = (newItem: Item) => {
    const index = list.findIndex((item) => item.id === newItem.id)
    list[index].done = newItem.done
    setList(list)

  }
  
  return (
    <div className="App">
      <Container>
        <Content>
          <Header>Lista de Tarefas</Header>

          <InsertItem 
            handlePressEnter={handlePressEnter}
            list={list}
          />
          {list.length > 0 ? 
            list.map((item,index) => (
              <ListItem 
                item={item} 
                key={index}
                handleInputChecked={handleInputChecked}
              /> 
            ))
            :
            <p>Insira uma tarefa!</p>
          }
          
          
        </Content>
      </Container>
    </div>
  );
}

export default App;
