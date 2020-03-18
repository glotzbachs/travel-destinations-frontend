import React, { Component } from 'react'
import {connect} from 'react-redux'
import Destination from '../components/Destination'
import {fetchDestinations} from '../actions/fetchDestinations'
import DestinationForm from '../components/DestinationForm'

class TropicsContainer extends Component {
   
    render() {

        if (this.props.destinations.length <=0){
            this.props.fetchDestinations()
        }

        const filteredDestinations=this.props.destinations.filter(destination => destination.location === 'Tropical Islands')

        const destinations=filteredDestinations.map(destination => {
            return <li key={destination.id}><Destination {...destination}/><br/></li> 
        })

        return (
            <div>
                <DestinationForm location='Tropical Islands' />
                <h2>Tropical Destinations</h2>
                <br/>
                <ul style={{listStyleType: "none"}}>
                    {destinations}
                </ul> 
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        destinations: state.destinationReducer.destinations,
        loading: state.destinationReducer.loading
    }
}
export default connect(mapStatetoProps,{fetchDestinations})(TropicsContainer)