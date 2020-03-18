import React from 'react'
import {connect} from 'react-redux'
import {fetchDestinations} from '../actions/fetchDestinations'



class Home extends React.Component{


    componentDidMount(){
        this.props.fetchDestinations()
    }

    render(){
        return (
            <div>
                <br/>
                <h1>Welcome to Destination Attractions!</h1>
                <h3>Click on one of the tabs to see some popular destinations!</h3>
            </div>
        )    
    }
    
}

export default connect(null ,{fetchDestinations})(Home)