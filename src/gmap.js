import React, { Component } from 'react'
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'



    
    function jord(){
       return  <GoogleMap defaultZoom = {10} defaultCenter={{lat : 45, lng : -75}}/>
    }

   const WrappedMap = withScriptjs(withGoogleMap(Map))

   

export default function App 
    return (
        <div style = {{width: '100vw', height : '100vh'}}>
        <Map googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`} 
        loadingElement = {<div style = {{height : "100%"}}/>}
        containerElement = {<div style = {{height : "100%"}}/>}
        mapElement = {<div style = {{height : "100%"}}/>}
        />
        </div>
    );
    
    

