import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchDestinations} from '../actions/fetchDestinations'
import Destinations from '../components/Destinations'
import DestinationForm from '../components/DestinationForm'
import AttractionsContainer from './AttractionsContainer'


class DestinationsContainer extends Component {

    state = {
        location: ''
    }

    componentDidMount(){
        this.props.fetchDestinations()
    }

    handleOnClick = (e) => {

    }

    render() {
        return (
            <div>
                <DestinationForm handleSubmit={this.handleOnSubmit}/>
                <h2>Destinations</h2>
                <br/>
                <Destinations destinations={this.props.destinations} handleThisClick={this.handleOnClick}/>  
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