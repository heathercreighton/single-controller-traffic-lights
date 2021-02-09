import React from 'react';

function TrafficLight(props){
let { id, name, color, cb } = props


  return(
    <>
      <h2>The color at {name} is {color} </h2>
      <button onClick={() => cb(id)}>Click</button>
    </>
  )
}

export default TrafficLight;