import React, { Component } from 'react'
import LocationButtons from './LocationButtons'
import Destination from './Destination'

class Destinations extends Component {

    render() {

        // const locations = [];
        // this.props.destinations.map(destination => {
        // if (locations.indexOf(destination.location) === -1) {
        //     locations.push(destination.location)
        // }})
            
        // const buttons = locations.map((location,i) => {
        //     return <LocationButtons key={i} location={location} handleClick={this.handleOnClick}/>
        // })
        // Changed to a NavBar!!

        const destinations = this.props.destinations.map(destination => {
           return <li><Destination key={destination.id} name={destination.name} handleClick={this.props.handleThisClick}/><br/></li> 
        })

        return (
            <div>
                {/* {buttons}
                <hr></hr> */}

                <ul style={{listStyleType: "none"}}>
                    {destinations}
                </ul> 
            </div>
        )
    }
}

export default Destinations
