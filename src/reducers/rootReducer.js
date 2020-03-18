import {combineReducers} from 'redux'
import destinationReducer from './destinationReducer'
import attractionReducer from './attractionReducer'


const rootReducer = combineReducers({
    destinationReducer,
    attractionReducer
})

export default rootReducer