import React, { Component } from 'react'
import Attraction from '../components/Attraction'
import {connect} from 'react-redux'
import {fetchAttractions} from '../actions/fetchAttractions'

class AttractionsContainer extends Component {

    // destinationId = `${this.props.match.params.id - 1}`

    // componentDidMount(){
    //     this.props.fetchAttractions(destinationId)
    // }

    render() {

        const attractions = this.props.attractions.map(attraction => {
            return <li key={attraction.id}><Attraction {...attraction}/><br/></li> 
        })

        return (
            <>
                {attractions.length > 0 ? <h3>Attractions:</h3> : null}
                <ul style={{listStyleType: "none"}}>
                    {attractions}
                </ul> 
            </>
        )
    }
}

// const mapStatetoProps = (state) => {
//     return {
//       attractions: state.attractionReducer.attractions,
//       loading: state.attractionReducer.loading
//     }
// }

export default connect(null,{fetchAttractions})(AttractionsContainer)