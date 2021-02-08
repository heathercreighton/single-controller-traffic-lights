import React, { useState } from 'react';
import TrafficLight from './TrafficLight'



function TrafficLightController(){
 
  const [color, setColor] = useState("green");
 
  const nextFirst = (color) => {
    const colors = ["green", "yellow", "red"];
    let currColor;
    console.log(name);
    if (color === colors[0]) {
            currColor = colors[1];
    } else if (color === colors[1]) {
            currColor = colors[2];
    } else {
            currColor = colors[0];
    }
    setColor(currColor);
    
  };

  const nextSecond = (color) => {
    const colors = ["green", "yellow", "red"];
    let currColor;
    console.log(name);
    if (color === colors[0]) {
            currColor = colors[1];
    } else if (color === colors[1]) {
            currColor = colors[2];
    } else {
            currColor = colors[0];
    }
    setColor(currColor);
    
  };


  const nextThird= (color) => {
    const colors = ["green", "yellow", "red"];
    let currColor;
    console.log(name);
    if (color === colors[0]) {
            currColor = colors[1];
    } else if (color === colors[1]) {
            currColor = colors[2];
    } else {
            currColor = colors[0];
    }
    setColor(currColor);
    
  };

  return(
    <>
      <TrafficLight key="0" name="First" color={color} cb={nextFirst} />
      <TrafficLight key="1" name="Second" color={color} cb={nextSecond} />
      <TrafficLight key="2" name="Third" color={color} cb={nextThird} />
      
    </>
  )
}


export default TrafficLightController;