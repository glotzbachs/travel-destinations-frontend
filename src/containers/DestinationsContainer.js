import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchDestinations} from '../actions/fetchDestinations'
import Destinations from '../components/Destinations'
import DestinationForm from '../components/DestinationForm'

class DestinationsContainer extends Component {

    

    render() {

        if (this.props.destinations.length <=0){
            this.props.fetchDestinations()
        }

        return (
            <div>
                <DestinationForm />
                <h2>Destinations</h2>
                <br/>
                <Destinations destinations={this.props.destinations} />  
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
      destinations: state.destinationReducer.destinations,
      loading: state.destinationReducer.loading
    }
}

export default connect(mapStatetoProps,{fetchDestinations})(DestinationsContainer)