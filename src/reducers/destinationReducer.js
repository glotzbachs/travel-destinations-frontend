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

            default:
                return state
        }
    }

        
    
    