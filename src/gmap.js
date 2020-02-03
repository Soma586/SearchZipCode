import React, { Component } from 'react'

export default class gmap extends Component {

    
    jord = () =>{
        var map = new google.map.Map(document.getElementById('map'), {
            center : {lat: -34.397, lng: 150.644},
            zoom: 8
        }).catch(error =>{
            console.log("could not get map data")
        })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
