import { useEffect, useState } from 'react';
import './App.css';
import ListPost from './components/ListPosts';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

   const [todoItem, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
    ])
    function handleDeleteItem(todo){
      const index = todoItem.findIndex(item => item.id === todo.id);
      if(index <0) return;
      const newTodoList = [...todoItem];
      newTodoList.splice(index,1);
      setTodoList(newTodoList)
    }
    function handleSubmitTodoList(formValue){
      const newTodo = {
        id: todoItem.length + 1,
        ...formValue
      }
      const newTodoList = [...todoItem]
      newTodoList.push(newTodo)
      setTodoList(newTodoList);
    }

    const [posts, setPostList] = useState([]);
    const [type, setType] = useState('posts')
    const listType = ['posts', 'comments', 'albums', 'todos']
    useEffect(() => {
      // async function fetchPostList() {
      //   try{
      //     const requestURL = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
      //     const respond = await fetch(requestURL);
      //     const respondJson = await(respond.json());
      //     console.log({respondJson})
      //     const {data} = respondJson;
      //     setPostList(data);
      //   }
      //   catch(err){
      //     console.log('failed to call API post list', err.message)
      //   }
      // }
      // console.log('post list ')
      // fetchPostList();
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
              .then(respond => respond.json())
              .then(data => {
                setPostList(data)
              })
              .catch(error => {
                throw(error);
            })
    }, [type])
    function handleChangeType(){
      
    }
  return (
    <div className="App">
      <h1 className="header" style = {{backgroundColor:'red', color: 'white'}}>My First App</h1>
      {/* <TodoForm 
        submitTodoList = {handleSubmitTodoList}
      />
      <TodoList 
        todoList = {todoItem}
        clickTodo = {handleDeleteItem}
      /> */}
      {
        listType.map((tab) => (
          <button key = {tab}
          style = {type === tab ? {color: '#fff' , backgroundColor: 'red'} : {}}
          onClick = {() => setType(tab)}
          >
            {tab}
          </button>
        ))
      }
     <ListPost posts = {posts} />
    </div>
  );
}

export default App;
