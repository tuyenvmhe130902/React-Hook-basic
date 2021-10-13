import React, { useState } from 'react';

function randomColor(){
    const LIST_COLOR = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const newColor = Math.floor(Math.random() * LIST_COLOR.length);
    return LIST_COLOR[newColor];

}

function ColorBox() {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('color_box') || 'green';
        console.log(initColor);
        return initColor;
    });
    
    
    function handelChangeColor(){
       const newColor = randomColor();
       setColor(newColor)
    }

    return (
        <div className = 'color_box' style = {{backgroundColor: color, width: 350, height: 150, marginLeft: 500}}
        onClick = {handelChangeColor}
        >
            This is Color Box
        </div>
    );
}

export default ColorBox;