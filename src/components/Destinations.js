import React, { Component } from 'react'
import LocationButtons from './LocationButtons'

class Destinations extends Component {

    handleOnClick(e){
        console.log(e.target)
    }

    render() {

        const locations = [];
        this.props.destinations.map(destination => {
        if (locations.indexOf(destination.location) === -1) {
            locations.push(destination.location)
        }})
            
        const buttons = locations.map((location,i) => {
            return <LocationButtons key={i} location={location} handleClick={this.handleOnClick}/>
        })

        const destinations = this.props.destinations.map(destination => {
           return <li>{destination.name}</li> 
        })

        return (
            <div>
                {buttons}
                <hr></hr>

                <ul style={{listStyleType: "none"}}>
                    {destinations}
                </ul> 
            </div>
        )
    }
}

export default Destinations
