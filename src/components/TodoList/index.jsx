import React from 'react';
import PropTypes from  'prop-types';

TodoList.propTypes = {
   todos: PropTypes.array.isRequired,
   clickTodo: PropTypes.func.isRequired,
};


function TodoList(props) {
    const {todos, clickTodo} = props;

    function deleteTodoItem(todo){
        if(clickTodo){
            clickTodo(todo)
        }
    }

    return(
        <ul className = "list-todo">
            {
                todos.map((todo) => (
                    <li key = {todo.id}  onClick = {() => deleteTodoItem(todo)}>
                        {todo.title}
                    </li>
                ))
            }
        </ul>
    )
}

export default TodoList;