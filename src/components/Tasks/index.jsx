import React from 'react';
import PropTypes from 'prop-types';
import Task from "../Task";

Tasks.propTypes = {
    task: PropTypes.string,
};

function Tasks(props) {
    const {tasks} = props;
    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} task={task}/>
            ))}
        </div>
    );
}

export default Tasks;