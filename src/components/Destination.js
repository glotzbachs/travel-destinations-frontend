import React from 'react'
import AttractionsContainer from '../containers/AttractionsContainer'
import {Link} from 'react-router-dom'


const Destination = (props) => {

    const name = props.name
    const id = props.id
    
    return (
        <div>
            
            <Link to={`/destinations/${id}`}>
                <button variant="outline-primary" id={props.id} >{name}</button>
            </Link>
           
            <AttractionsContainer attractions={props.attractions}/>
        </div>
    )
}


export default Destination