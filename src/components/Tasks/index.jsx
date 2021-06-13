import React from 'react';
import PropTypes from 'prop-types';
import Task from "../Task";

Tasks.propTypes = {
    task: PropTypes.string,
    handleDelete: PropTypes.func,
};

function Tasks(props) {
    const {tasks, handleDelete} = props;

    console.log(tasks);
    return (
        <div>
            {tasks.map((task, index) => (
                <Task key={task.id} task={task} onDelete={handleDelete}/>
            ))}
        </div>
    );
}

export default Tasks;