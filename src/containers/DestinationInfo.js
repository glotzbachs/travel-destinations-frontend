import React, { Component } from 'react'
import {connect} from 'react-redux'

class DestinationInfo extends Component {

    render() {

        const destination = this.props.destinations.filter(destination => {
            return destination.id == this.props.match.params.id
        })
        
        console.log(destination)

        return (
            <div>
                <h2>{destination.destination.name}</h2>
            </div>
        )
    }
}

const mapStatetoProps = state => {
   return {
     destinations: state.destinationReducer.destinations 
   } 
}

export default connect(mapStatetoProps)(DestinationInfo)