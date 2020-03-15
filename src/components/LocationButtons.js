import React, { Component } from 'react'

class LocationButtons extends Component {
    render() {
        return (
            <>
                <button onClick={this.props.handleClick} id={this.props.location}>{this.props.location}</button>
            </>
        )
    }
}

export default LocationButtons