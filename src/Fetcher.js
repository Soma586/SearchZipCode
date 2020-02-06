import React, {Component} from 'react'
import CityInfo from './cityInfo'
import Form from './form'
import zipData from './zipData'
import Loader from 'react-loader-spinner'
//import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'




class Fetcher extends Component{
    
        state = {
            cities :[],
            isPending : false,
            isSubmitted: false,
            isError: false,
           // lat : 20,
           // lng : -100

        }

        updateState = () =>{
            this.setState({
                isSubmitted : true,
                isPending : true,
                cities : [],
                isError: false
            })
        }

        //  jord =() =>{
        //     return  <GoogleMap defaultZoom = {10} 
        //     center={{lat : this.state.lat, lng : this.state.lng}}
        //     onClick = {this.onMapClicked}
        //     />
        //  }

        //  componentDidMount(){
        //      this.setState({
        //          lat: this.state.cities.Lat,
        //         lng : this.state.cities.Long
        //      })
        //  }
     
       // const WrappedMap = withScriptjs(withGoogleMap(jord))
     
    

    search = () =>{
        this.updateState();
        const input = document.getElementById("zip").value
        if(input.length > 5){
            this.setState({
                //cities : data,
                isPending : false,
                isSubmitted: false,
                isError: false

            })

        }
        if(input.length === 5){
            fetch("http://ctp-zip-api.herokuapp.com/zip/" + input)
            .then(response => response.json())
            .then(data =>{
                console.log(data)
                console.log("this is new")
               
                this.setState({
                    cities : data,
                    isPending : false,
                    isSubmitted: false,
                    isError: false,
                    lat : data.Lat,
                    lng : data.Long

                })
               // this.componentDidMount()
                
            })
            .catch(error =>{
                console.log("there was an error");
                this.setState({
                    isError: true,
                    isPending: false,
                    isSubmitted : false
                })
            })
        } 

    }

    render(){

        const {isPending, isSubmitted, isError} = this.state;

        let loader;

        if(isError){
            loader = (
                <h2 className = "message">
                    Zipcode was not found, type in a valid zipcode number.
                </h2>
            )
        }

        if(isPending && isSubmitted){
            loader = (
                <div>
                {/* <p className="message">please type in a valid zipcode number.</p> */}
                <div className="loader-container">
                  <Loader type="ThreeDots" color="#000000" height="100" width="100" />
                </div>
              </div>
            )
        }
        console.log("city information " + this.state.cities.City)
        
       const results = this.state.cities.map(city => <CityInfo State = {city.State} Coordinates = {city.Location} population = {city.EstimatedPopulation}
         wages = {city.TotalWages} city = {city.City} ZipCode = {city.Zipcode}/>)
       
       console.log(results)

    //    this.setState({
    //        lat : this.state.cities.Lat,
    //        lng : this.state.cities.Long
    //    })
     //  const WrappedMap = withScriptjs(withGoogleMap(this.jord))

        return(
            <div>
                 
                <Form search = {this.search}/>
                {loader}
               
                
                <div className = "city-container">
                {results}
                </div>

                  {/* <div style = {{width: '50vw', height : '50vh'}}>
        <WrappedMap googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=
          AIzaSyBRuMgpPCklP_WPwA4ed0jUghNDIlaaXCM
        `} 
        loadingElement = {<div style = {{height : "100%"}}/>}
        containerElement = {<div style = {{height : "100%"}}/>}
        mapElement = {<div style = {{height : "100%"}}/>}
        /> */}
        </div>

       

        

           
        )
    }
}

export default Fetcher;