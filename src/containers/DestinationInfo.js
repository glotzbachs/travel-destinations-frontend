import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import AttractionForm from '../components/AttractionForm'
import AttractionsContainer from './AttractionsContainer'
import {fetchDestinations} from '../actions/fetchDestinations'


class DestinationInfo extends Component {

    componentDidMount(){
        if (this.props.destinations.length <=0){
            this.props.fetchDestinations()
        }
    }

    render() {

        let destination = this.props.destinations[this.props.match.params.id-1]


        return (
            <div>
                {destination===undefined ? <Redirect to='/destinations' /> : null}
                <h2>{destination.name}</h2>
                <h3>Location: {destination.location}</h3>
                {/* <AttractionForm destinationId={destination.id}/> */}
                <AttractionsContainer attractions={destination.attractions} destinationId={destination.id}/>
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

export default connect(mapStatetoProps, {fetchDestinations})(DestinationInfo)