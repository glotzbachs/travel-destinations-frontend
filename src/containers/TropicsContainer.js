import React, { Component } from 'react'
import {connect} from 'react-redux'
import Destination from '../components/Destination'
import {fetchDestinations} from '../actions/fetchDestinations'
import DestinationForm from '../components/DestinationForm'

class TropicsContainer extends Component {

    componentDidMount(){
        this.props.fetchDestinations()
    }

    handleOnClick(e){

    }
    
    render() {

        const filteredDestinations=this.props.destinations.filter(destination => destination.location === 'Tropical Islands')

        const destinations=filteredDestinations.map(destination => {
           return <li><Destination key={destination.id} name={destination.name} attractions={destination.attractions} handleClick={this.handleOnClick}/><br/></li> 
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