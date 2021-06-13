import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null
}

function TodoForm(props) {

    const {submit} = props;

    const[value, setValue] = useState();

    function handleChangeValue(e) {
        setValue(e.target.value);
    }

    function handleReloadSubmit(e) {
        e.preventDefault();

        if(!submit) return;

        const newValue = {
            title: value
        }

        submit(newValue);
    }

    return (
        <form className='add-form' onSubmit={handleReloadSubmit}>
            <div className='form-control'>
                <label>New Task:</label>
                <input type='text' placeholder='Add Task'/>
            </div>
            <input type="submit" value='Save Task' className="btn btn-button"/>
        </form>
    );
}

export default TodoForm;