import React, { Component } from 'react'
import {connect} from 'react-redux'
import Destination from '../components/Destination'
import {fetchDestinations} from '../actions/fetchDestinations'

class AsiaContainer extends Component {

    componentDidMount(){
        this.props.fetchDestinations()
    }

    handleOnClick(e){

    }
    
    render() {

        const filteredDestinations=this.props.destinations.filter(destination => destination.location === 'Asia')

        const destinations=filteredDestinations.map(destination => {
           return <li><Destination key={destination.id} name={destination.name} handleClick={this.handleOnClick}/><br/></li> 
        })

        return (
            <div>
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
        destinations: state.destinationReducer.destinations
    }
}
export default connect(mapStatetoProps,{fetchDestinations})(AsiaContainer)