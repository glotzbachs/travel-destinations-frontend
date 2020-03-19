import React, { Component } from 'react'
import {connect} from 'react-redux'
import Destination from '../components/Destination'
import {fetchDestinations} from '../actions/fetchDestinations'
import DestinationForm from '../components/DestinationForm'

class AsiaContainer extends Component {
   
    componentDidMount(){
        if (this.props.destinations.length <=0){
            this.props.fetchDestinations()
        }
    }

    render() {

        const filteredDestinations=this.props.destinations.filter(destination => destination.location === 'Asia')

        const destinations=filteredDestinations.map(destination => {
            return <li key={destination.id}><Destination {...destination}/><br/></li> 
        })

        return (
            <div>
                <DestinationForm location='Asia' />
                <h2>Asian Destinations</h2>
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
export default connect(mapStatetoProps,{fetchDestinations})(AsiaContainer)