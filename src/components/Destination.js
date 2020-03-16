import React from 'react'
import AttractionsContainer from '../containers/AttractionsContainer'


const Destination = (props) => {

    const name = props.name

    return (
        <div>
           <button variant="outline-primary" onClick={props.handleClick} id={name}>{name}</button>
            <AttractionsContainer attractions={props.attractions}/>
        </div>
    )
}


export default Destination