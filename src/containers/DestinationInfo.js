import React, { Component } from 'react'
import {connect} from 'react-redux'
import Attraction from '../components/Attraction'

class DestinationInfo extends Component {

    render() {


        const destination = this.props.destinations.filter(destination => {
            return destination.id == this.props.match.params.id
        })

        const attractions = destination[0].attractions.map(attraction => {
            return <li><Attraction key={attraction.id} {...attraction}/><br/></li> 
        })

        
        console.log(destination)

        return (
            <div>
                <h2>{destination[0].name}</h2>
                <h3>Location: {destination[0].location}</h3>
                <h3>Attractions:</h3>
                <ul style={{listStyleType: "none"}}>
                    {attractions}
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

export default connect(mapStatetoProps)(DestinationInfo)