import React, { Component } from 'react'

class LocationButtons extends Component {
    render() {
        return (

            // Now Part of the NavBar
            <>
                <button onClick={this.props.handleClick} id={this.props.location}>{this.props.location}</button>
            </>
        )
    }
}

export default LocationButtons