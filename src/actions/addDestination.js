export const addDestination = (destination) => {
    
    return (dispatch) => { 
        dispatch({type:'ADD_DESTINATION'})
        return fetch('/destinations', {
            method: 'POST',
            body: JSON.stringify(destination),
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
            }
        })
        .then(resp => resp.json())
        .then(destination => {  
            return (
             dispatch({
                type: 'ADDED_DESTINATION',
                payload: destination   
                }) 
            )
        })
    }
}