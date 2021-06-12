import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./ColorBox.scss"

ColoBox.propTypes = {
    
};

function getRandomColor(){
    const color = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const random = Math.floor(Math.random() * color.length);
    return color[random];
}

function ColoBox() {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem("color-box") || 'green';
        return initColor;
    });

    function HandleBoxClick(){
        const color = getRandomColor();
        setColor(color);

        localStorage.setItem("color-box", color);
    }

    return (
        <div 
            className="color-box"
            style={{backgroundColor: color}}
            onClick={HandleBoxClick}
        >
        </div>
    );
}

export default ColoBox;