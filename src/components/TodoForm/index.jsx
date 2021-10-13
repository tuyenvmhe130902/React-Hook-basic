import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    clickSubmitText: PropTypes.func.isRequired,
};


function TodoForm(props) {
    const {clickSubmitText} = props;
    const [value, setValue] = useState('')
function addText(e){
        setValue(e.target.value);
    }
function submitForm(e){
    e.preventDefault();

    if(!clickSubmitText) return;
    const valueForm = {
        title: value
    }
    clickSubmitText(valueForm);
    setValue('')
}

    return(
        <form onSubmit = {submitForm}>
            <input
                type = 'text' value = {value}
                 onChange = {addText}
            />
        </form>
    )
}

export default TodoForm;