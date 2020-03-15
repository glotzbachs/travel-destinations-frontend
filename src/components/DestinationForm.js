import React, { Component } from 'react'

class DestinationForm extends Component {
    // state = {
    //     name: '',
    //     location: '',
    //     description: ''
    // }

    // handleChange(e){
    //     console.log(e.target.name)
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    render() {
        return (
            <div>
                <h3>Add a New Destination</h3>
                {/* <form>
                    Name: <input name='name' value={this.state.name} onChange={this.handleChange}></input><br/>
                    Location: <input name='location' value={this.state.location} onChange={this.handleChange}></input><br/>
                    Description: <input name='description' value={this.state.description} onChange={this.handleChange}></input>
                </form> */}
            </div>
        )
    }
}

export default DestinationForm
