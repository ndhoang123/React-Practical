import React from 'react';
import PropTypes from 'prop-types';
import Button from "../Button";
import { useLocation } from 'react-router';

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onShowTaskClick: PropTypes.func,
};

Header.defaultProps ={
    title: 'Task Tracker',
    onShowTaskClick: null
};

function Header(props) {
    const {title, onShowTaskClick, AddTask} = props;
    const location = useLocation();

    return (
        <div className='header'>
            <h1>Hello {title}</h1>
            {location.pathname ==='/' && 
            (<Button 
            color={AddTask ? "red" : "green"} 
            text={AddTask ? "Close" : "Add"} 
            onClick={onShowTaskClick}/>
            )}
        </div>
    );
}

export default Header;