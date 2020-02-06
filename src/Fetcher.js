import React, {Component} from 'react'
import CityInfo from './cityInfo'
import Form from './form'
import zipData from './zipData'
import Loader from 'react-loader-spinner'


class Fetcher extends Component{
    
        state = {
            cities :[],
            isPending : false,
            isSubmitted: false,
            isError: false,
        }

     

        
        updateState = () =>{
            this.setState({
                isSubmitted : true,
                isPending : true,
                cities : [],
                isError: false
            })
        }

    search = () =>{
        this.updateState();
        const input = document.getElementById("zip").value
       
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
                })
             
                
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
        
        console.log("redemption");
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


        return(
            <div>
                 
                <Form search = {this.search}/>
                {loader}
                <div className = "city-container">
                {results}
                </div>

            
        </div>

       

        

           
        )
    }
}

export default Fetcher;