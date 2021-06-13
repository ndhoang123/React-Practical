import React from 'react';
import PropTypes from 'prop-types';
import Button from "../Button";

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

Header.defaultProps ={
    title: 'Task Tracker'
}

function Header(props) {
    const {title} = props;

    const handleOnClick = () => {
        console.log("Click");
    }

    return (
        <div className='header'>
            <h1>Hello {title}</h1>
            <Button color="green" text="Add" onClick={handleOnClick}/>
        </div>
    );
}

export default Header;