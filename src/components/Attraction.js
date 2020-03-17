import React from 'react'

const Attraction = props => {
    return (
        <div>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default Attraction