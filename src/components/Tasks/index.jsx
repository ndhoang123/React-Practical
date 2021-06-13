import React from 'react';
import PropTypes from 'prop-types';
import Task from "../Task";

Tasks.propTypes = {
    task: PropTypes.string,
    handleDelete: PropTypes.func,
};

function Tasks(props) {
    const {tasks, handleDelete} = props;
    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={handleDelete}/>
            ))}
        </div>
    );
}

export default Tasks;