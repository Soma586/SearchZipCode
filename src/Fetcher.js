import React, {Component} from 'react'
import CityInfo from './cityInfo'
import Form from './form'
import zipData from './zipData'


class Fetcher extends Component{
    
        state = {
            cities :[]
        }
    

    search = () =>{
        const input = document.getElementById("zip").value
        if(input.length === 5){
            fetch("http://ctp-zip-api.herokuapp.com/zip/" + input)
            .then(response => response.json())
            .then(data =>{
                console.log(data)
                console.log("hello")
               
                this.setState({
                    cities : data
                    

                })
                
            })
        } 

    }

    click = () =>{
        
    }
    render(){
        console.log("city information " + this.state.cities.City)
        //const results = this.state.cities.map((city) => {
           // <CityInfo state = {city.City} />
       // })
        //const result = 
        //const results = this.state.cities.map(city => <CityInfo city = {console.log(city.City.City)}/>)
       const results = this.state.cities.map(city => <CityInfo State = {city.State} Coordinates = {city.Location} population = {city.EstimatedPopulation} wages = {city.TotalWages}/>)
       //<Form search = {this.search}/>
       //const results = zipData.map( i => {
         // return( <CityInfo state = {i.statel}/>)
      // })

       console.log(results)

        return(
            <div>
                
                <Form search = {this.search}/>
                
                <div className = "city-container">
                {results}
                </div>

            </div>
        )
    }
}

export default Fetcher;