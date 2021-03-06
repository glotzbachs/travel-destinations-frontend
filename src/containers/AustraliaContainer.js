import React, { Component } from 'react'
import {connect} from 'react-redux'
import Destination from '../components/Destination'
import {fetchDestinations} from '../actions/fetchDestinations'
import DestinationForm from '../components/DestinationForm'

class AustraliaContainer extends Component {

    componentDidMount(){
        if (this.props.destinations.length <=0){
            this.props.fetchDestinations()
        }
    }

    render() {


        const filteredDestinations=this.props.destinations.filter(destination => destination.location === 'Australia')

        const destinations=filteredDestinations.map(destination => {
            return <li key={destination.id}><Destination {...destination}/><br/></li> 
        })

        return (
            <div>
                <DestinationForm location='Australia' />
                <h2>Australian Destinations</h2>
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
export default connect(mapStatetoProps,{fetchDestinations})(AustraliaContainer)