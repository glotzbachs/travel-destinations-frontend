import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import App from './App';
import Home from './containers/Home';
import EuropeContainer from './containers/EuropeContainer';
import AsiaContainer from './containers/AsiaContainer';
import AfricaContainer from './containers/AfricaContainer';
import NorthAmericaContainer from './containers/NorthAmericaContainer';
import SouthAmericaContainer from './containers/SouthAmericaContainer';
import AustraliaContainer from './containers/AustraliaContainer';
import TropicsContainer from './containers/TropicsContainer';
import DestinationsContainer from './containers/DestinationsContainer';
import NavBar from './components/NavBar'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/destinations' component={DestinationsContainer} />
          <Route exact path='/europe' component={EuropeContainer} />
          <Route exact path='/north_america' component={NorthAmericaContainer} />
          <Route exact path='/south_america' component={SouthAmericaContainer} />
          <Route exact path='/tropics' component={TropicsContainer}  />
          <Route exact path='/asia' component={AsiaContainer} />
          <Route exact path='/africa' component={AfricaContainer} />
          <Route exact path='/australia' component={AustraliaContainer} />

        </Switch>
      </Router>  
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

