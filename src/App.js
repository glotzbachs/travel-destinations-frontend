import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {fetchDestinations} from './actions/fetchDestinations'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>Destinations</h2>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  console.log('state:', state)
  return {
    destinations: state.destinationReducer.destinations,
    loading: state.destinationReducer.loading
  }
}

export default connect(mapStatetoProps,{fetchDestinations})(App);
