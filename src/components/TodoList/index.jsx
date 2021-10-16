import React from 'react';
import PropTypes from  'prop-types';

TodoList.propTypes = {
    todoList : PropTypes.array.isRequired,
    clickTodo : PropTypes.func.isRequired,
};


function TodoList(props) {
    const {todoList, clickTodo} = props;
function deleteItem(todo){
    if(clickTodo){
        clickTodo(todo);
    }
}

    return(
        <ul className = "list-todo">
          {
              todoList.map((todo) => (
                <li key = {todo.id} style = {{listStyle : 'none'}}
                    onClick = {() => deleteItem(todo)}
                >
                    {todo.title}
                </li>
              ))
          }
        </ul>
    )
}

export default TodoList;