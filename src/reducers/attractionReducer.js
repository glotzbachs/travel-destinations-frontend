export default ( 
    state = {
        attractions: [],
        loading: false       
    }, action) => {
        switch(action.type){ 
            case 'FETCHING_ATTRACTIONS':
                return {
                    ...state,
                    loading: true
                }

            case 'LOADED_ATTRACTIONS':
                return {
                    destinations: action.payload,
                    loading: false
                }         

            case 'ADD_ATTRACTION':
                // debugger
                console.log('got attr.')
                return {
                    ...state,
                    loading: true
                }

            case 'ADDED_ATTRACTION':
                debugger
                console.log('added attr')
                return {
                    ...state,
                    attractions: [...state.attractions, action.payload],
                    loading: false
                }

            default:
                return state
        }
    }
