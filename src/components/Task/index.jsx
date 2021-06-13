import React from 'react';
import PropTypes from 'prop-types';
import { BsDashCircleFill } from "react-icons/bs";

Task.propTypes = {
    task: PropTypes.string,
    onDelete: PropTypes.func,
};

function Task({task, onDelete}) {
    return (
        <div className='task'>
            <h3>
                {task.title}{' '}
                <BsDashCircleFill 
                    style={{color: 'red', cursor: 'pointer'}}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
        </div>
    );
}

export default Task;