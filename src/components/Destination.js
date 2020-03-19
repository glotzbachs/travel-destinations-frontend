import React, {Component} from 'react'
import AttractionsContainer from '../containers/AttractionsContainer'
import {Link} from 'react-router-dom'


class Destination extends Component {

    // state= {
    //     likes: 0
    // }

    // handleClick = () => {
    //     this.setState((prevState) => {
    //         return { likes: prevState.likes + 1 }
    //     })
    // } LIKE BUTTON ADDED IN LIVE CODE 
    
    render(){
        const name = this.props.name
        const id = this.props.id
        
        return (
            <div> 
                <Link to={`/destinations/${id}`}>
                    <button variant="outline-primary" id={id} >{name}</button>
                </Link>
        {/* <button onClick={this.handleClick}>Likes ({this.state.likes})</button> */}
            </div>
        )
    }
}


export default Destination