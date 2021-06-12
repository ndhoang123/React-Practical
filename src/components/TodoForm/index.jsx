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
        <form onSubmit={handleReloadSubmit}>
            <label>
                New item:
                <textarea value={value} onChange={handleChangeValue}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default TodoForm;