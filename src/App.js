import React from 'react';
//import CityInfo from './cityInfo';
import Header from './Header'
import Info from './Fetcher'
import './App.css'
//import Map from './gmap'

//import axios from 'axios';\
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'



    
    function jord(){
       return  <GoogleMap defaultZoom = {10} defaultCenter={{lat : 20, lng : 105}}/>
    }

   const WrappedMap = withScriptjs(withGoogleMap(jord))


let App = () =>{
  return (
    <div>
      <Header/>
    <Info/>

    <div style = {{width: '50vw', height : '50vh'}}>
        <WrappedMap googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=
          AIzaSyBRuMgpPCklP_WPwA4ed0jUghNDIlaaXCM
        `} 
        loadingElement = {<div style = {{height : "100%"}}/>}
        containerElement = {<div style = {{height : "100%"}}/>}
        mapElement = {<div style = {{height : "100%"}}/>}
        />
        </div>

   
      
    </div>


    
    
  )

}



 
  




//var object = "";

//console.log(object);



export default App;
