import React, { Component } from 'react'
import {addAttraction} from '../actions/addAttraction'
import {connect} from 'react-redux'

class AttractionForm extends Component {

    state = {
        name: '',
        description: '',
        destinationId: this.props.destinationId
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
        console.log('state', this.state)
        const attraction = {...this.state}
        this.props.addAttraction(attraction, this.state.destinationId)
        this.setState({
            name: '',
            description: '',
            destinationId: this.props.destinationId
        })
    }

    render() {
        return (
            <div>
                <h4 >Add Attraction</h4>
                <form onSubmit={this.handleSubmit}>
                    Name: <input name='name' value={this.state.name} onChange={this.handleChange}></input><br/>
                    Description: <input name='description' value={this.state.description} onChange={this.handleChange}></input>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}

export default connect(null, {addAttraction})(AttractionForm)
