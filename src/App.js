import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

   const [todoItem, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
    ])

function handleDeleteTodoItem(todo){
    const index = todoItem.findIndex(x => x.id === todo.id);
    if(index < 0 ) return;
    const newTodoList = [...todoItem];
    newTodoList.splice(index,1);

    return (
      setTodoList(newTodoList)
    )
}
function handelAddTodoList(formValue){
  const newTodo = {
    id: todoItem.length + 1,
    ...formValue
  }
  const newTodoList = [...todoItem];
  newTodoList.push(newTodo);
  setTodoList(newTodoList);
  
}

  return (
    <div className="App">
      <h1 className="header" style = {{backgroundColor:'red', color: 'white'}}>My First App</h1>

    <TodoForm 
      clickSubmitText = {handelAddTodoList}
    />

    <TodoList 
      todos = {todoItem}
      clickTodo = {handleDeleteTodoItem}
    />
    </div>
  );
}

export default App;
