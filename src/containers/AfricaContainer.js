import React, { Component } from 'react'
import {connect} from 'react-redux'
import Destination from '../components/Destination'
import {fetchDestinations} from '../actions/fetchDestinations'
import DestinationForm from '../components/DestinationForm'

class AfricaContainer extends Component {

    componentDidMount(){
        this.props.fetchDestinations()
    }

    render() {

        const filteredDestinations=this.props.destinations.filter(destination => destination.location === 'Africa')

        const destinations=filteredDestinations.map(destination => {
            return <li><Destination key={destination.id} {...destination}/><br/></li> 
        })

        return (
            <div>
                <DestinationForm location='Africa' />
                <h2>African Destinations</h2>
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
export default connect(mapStatetoProps,{fetchDestinations})(AfricaContainer)