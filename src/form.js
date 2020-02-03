import React from 'react'


let Form = (props) =>{
    return(
        <div>
            <form>
                <label>Zip Code:</label>
                <input id = "zip" onChange = {props.search} maxLength = "5"/>
                


            </form>



        </div>
    )
}


export default Form;