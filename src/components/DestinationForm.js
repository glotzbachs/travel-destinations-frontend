import React, { Component } from 'react'
import {addDestination} from '../actions/addDestination'
import {connect} from 'react-redux'

class DestinationForm extends Component {

    state = {
        name: '',
        location: this.props.location ? this.props.location : 'Africa',
    }
    
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleSelect = (e) => {
        this.setState({
            location: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
        console.log('state', this.state)
        const destination = {...this.state}
        this.props.addDestination(destination)
        this.setState({
            name: '',
            location: this.props.location ? this.props.location : 'Africa'
        })
    }

    render() {
        return (
            <div>
                <h3>Add a New Destination</h3>
                <form onSubmit={this.handleSubmit}>
                    Name: <input name='name' value={this.state.name} onChange={this.handleChange}></input><br/>
                    Location: <select name='location' value={this.state.location} onChange={this.handleSelect}>
                            <option value='Africa' >Africa</option>
                            <option value='Asia' >Asia</option>
                            <option value='Australia' >Australia</option>
                            <option value='Europe' >Europe</option>
                            <option value='North America'>North America</option>
                            <option value='South America'>South America</option>
                            <option value='Tropical Islands'>Tropical Islands</option>
                        </select><br/>
                    {/* Description: <input name='description' value={this.state.description} onChange={this.handleChange}></input> */}
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}

export default connect(null, {addDestination})(DestinationForm)
