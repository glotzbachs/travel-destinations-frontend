import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchDestinations} from '../actions/fetchDestinations'
import Destinations from '../components/Destinations'
import DestinationForm from '../components/DestinationForm'

class DestinationsContainer extends Component {

    componentDidMount(){
        this.props.fetchDestinations()
    }

    render() {
        return (
            <div>
                <h2>Destinations</h2>
                <Destinations destinations={this.props.destinations} />
                <DestinationForm />
                
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    console.log('state:', state)
    return {
      destinations: state.destinationReducer.destinations,
      loading: state.destinationReducer.loading
    }
  }

export default connect(mapStatetoProps,{fetchDestinations})(DestinationsContainer)