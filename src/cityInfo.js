import React from 'react';

//it seems like when you have a class/ component then you need to call the render method
function CityInfo(props) {

  return(
    <div className = "card">
        <ul>
            <li>State : {props.State}</li>
            <li>Location : {props.Coordinates}, </li>
            <li>Population estimation : {props.population}</li>
            <li>Total Wages : {props.wages}</li>
        </ul>
      
    </div>
  )
}



export default CityInfo;
