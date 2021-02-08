import React from 'react';

function TrafficLight(props){
let { name,color, cb } = props
console.log(props)
  return(
    <>
      <h2>The color at {name} is {color} </h2>
      <button onClick={() => cb(color)}>Click</button>
    </>
  )
}

export default TrafficLight;