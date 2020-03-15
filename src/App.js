import React, { Component } from 'react';
import './App.css';
import DestinationsContainer from './containers/DestinationsContainer'
import EuropeContainer from './containers/EuropeContainer';
import AfricaContainer from './containers/AfricaContainer';
import AsiaContainer from './containers/AsiaContainer';
import AustraliaContainer from './containers/AustraliaContainer';
import SouthAmericaContainer from './containers/SouthAmericaContainer';
import NorthAmericaContainer from './containers/NorthAmericaContainer';
import TropicsContainer from './containers/TropicsContainer';



class App extends Component {

  render() {
    return (
      <div className="App">
        <DestinationsContainer />
        <EuropeContainer />
        <br/>
        <AfricaContainer />
        <br/>
        <AustraliaContainer />
        <br/>
        <AsiaContainer />
        <br/>
        <SouthAmericaContainer />
        <br/>
        <NorthAmericaContainer />
        <br/>
        <TropicsContainer />
      </div>
    );
  }
}

export default App;
