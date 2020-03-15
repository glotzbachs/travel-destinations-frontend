import React, { Component } from 'react'
import {connect} from 'react-redux'

class AsiaContainer extends Component {

    render() {

        const filteredDestinations=this.props.destinations.filter(destination => destination.location === 'Asia')

        const destinations=filteredDestinations.map(destination => {
           return <li>{destination.name}</li> 
        })

        return (
            <div>
                <ul style={{listStyleType: "none"}}>
                    {destinations}
                </ul> 
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        destinations: state.destinationReducer.destinations
    }
}
export default connect(mapStatetoProps)(AsiaContainer)