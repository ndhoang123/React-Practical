import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    const {color, text, onClick} = props;

    return (
        <div>
            <button 
            onClick={onClick} 
            style={{ backgroundColor:color }} 
            className='btn'>{text}
            </button>
        </div>
    );
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'add',
};

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    handleOnClick: PropTypes.func,
};

export default Button;