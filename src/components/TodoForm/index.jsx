import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
   submitTodoList: PropTypes.func.isRequired,
};


function TodoForm(props) {
   const {submitTodoList} = props;
   const [value, setValue] = useState('');

   function handleInputValue(e){
       setValue(e.target.value)
       console.log(e.target.value)
   }
    function handleSubmit(e){
        e.preventDefault();
        if(!submitTodoList) return;
        const valueForm = {
           title: value
        }
        submitTodoList(valueForm)
        setValue('')
    }

   return(
        <form onSubmit = {handleSubmit}>
            <input 
                value = {value}
                onChange = {handleInputValue}
            />
        </form>
   )
}

export default TodoForm;