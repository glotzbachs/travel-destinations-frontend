export const addDestination = (destination) => {
    return (dispatch) => {
        dispatch({type:'ADD_DESTINATION'}, destination)
        fetch('/destinations', {
            method: 'POST',
            body: JSON.stringify(destination),
            header: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(destinations => dispatch({
            type: 'ADDED_DESTINATION',
            payload: destinations
        }))
    }
}