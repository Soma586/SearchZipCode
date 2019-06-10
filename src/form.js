import React from 'react'


let Form = (props) =>{
    return(
        <div>
            <form>
                <label>Zip Code:</label>
                <input id = "zip" onChange = {props.search}/>
                


            </form>



        </div>
    )
}


export default Form;