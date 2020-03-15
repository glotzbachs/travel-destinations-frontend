import React from 'react'

const Destination = (props) => {

    const name = props.name

    return (
        <div>
           <button variant="outline-primary" onClick={props.handleClick} id={name}>{name}</button>
        </div>
    )
}


export default Destination