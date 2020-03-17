export default ( 
    state = {
        destinations:[],
        loading: false
    }, action) => {
        switch(action.type){
            case 'FETCHING_DESTINATIONS':
                return {
                    ...state,
                    loading: true
                }

            case 'LOADED_DESTINATIONS':
                return {
                    destinations: action.payload,
                    loading: false
                }    

            case 'ADD_DESTINATION':
                // debugger
                console.log('got dest.')
                return {
                    ...state,
                    loading: true
                }

            case 'ADDED_DESTINATION':
                // debugger
                console.log('added dest')
                return {
                    destinations: [...state.destinations, action.payload],
                    loading: false
                }

            default:
                return state
        }
    }

        
    
    