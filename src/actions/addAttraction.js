export const addAttraction = (attraction, destinationId) => {
    
    return (dispatch) => { 
        dispatch({type:'ADD_ATTRACTION'})
        return fetch(`/destinations/${destinationId}/attractions`, {
            method: 'POST',
            body: JSON.stringify(attraction),
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
            }
        })
        .then(resp => resp.json())
        .then(attraction =>  dispatch({
                type: 'ADDED_ATTRACTION',
                payload: attraction   
                }) 
            )
    }
}