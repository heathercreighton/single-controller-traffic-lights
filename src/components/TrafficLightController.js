import React, { useState } from 'react';
import TrafficLight from './TrafficLight'



function TrafficLightController(){
 
  const [light, setLight] = useState({id: 1, name: "First", color: "green"});

  const lights =[{
    id: 0,
    name: "First",
    color: "green"
  },
  {
    id: 1,
    name: "Second",
    color: "green"
  },
  {
    id: 2,
    name: "Third",
    color: "green"
  }
  ]
  const next = (name, color) => {
    
  };

  return(
    <>
      <TrafficLight id={lights[0].id} name={lights[0].name} color={lights[0].color} />

      <TrafficLight id={lights[1].id} name={lights[1].name} color={lights[1].color} />

      <TrafficLight id={lights[2].id} name={lights[2].name} color={lights[2].color} />
    </>
  )
}


export default TrafficLightController;