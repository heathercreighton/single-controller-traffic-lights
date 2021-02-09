import React, { useState } from 'react';
import TrafficLight from './TrafficLight'



function TrafficLightController(){
 
  const [light, setLight] = useState({id: 0, color: "green"});

  const lights =[
    {
      id: 0,
      color: "green"
    },
    {
      id: 1,
      color: "green"
    },
    {
      id: 2,
      color: "green"
    }
  ]
  
const colors = ["green", "yellow", "red"]
const next = (id) => {
    // Find the light we want to modify and store it in selectLight variable.  Because each light is an object, both the 
    // light object and selectLight will share the same memory location, thus when selectLight is updated, so it the light object.
    let selectLight = lights.find(item => {
        return item.id === id;
    });

    console.log("Before change:",selectLight)
    // Check to find the current index value of the color and increase the value by one if less then the last index number, or reset it by going to index 0.
    if (colors.indexOf(selectLight.color) < colors.length -1){
    selectLight.color = colors[colors.indexOf(selectLight.color)+1];
    } else {
        selectLight.color = colors[0];
    }
  console.log("After change:",selectLight)
  setLight(selectLight)
  console.log("Lights",lights)
 

}; //End of function



  return(
      <>
        <TrafficLight id={lights[0].id} name="First" color={lights[0].color} cb={next}/>

        <TrafficLight id={lights[1].id} name="Second" color={lights[1].color} cb={next}/>

        <TrafficLight id={lights[2].id} name="Third" color={lights[2].color} cb={next}/>
      </>
    )

  
};

  



export default TrafficLightController;