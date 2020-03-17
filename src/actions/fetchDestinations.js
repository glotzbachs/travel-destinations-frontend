// export const fetchDestinations = () => {
//     return (dispatch) => {
//         dispatch({
//             type:'FETCHING_DESTINATIONS'
//         })
//         fetch('/destinations')
//         .then(resp => resp.json())
//         .then(destinations => dispatch({
//             type: 'LOADED_DESTINATIONS',
//             payload: destinations
//         }))
//     }
// }

export function fetchDestinations() {
    return (dispatch) => {
      dispatch({ type: 'FETCHING_DESTINATIONS' });
      fetch('/destinations')
        .then(response => response.json())
        .then(destinations => dispatch({ type: 'LOADED_DESTINATIONS', payload: destinations }));
    };
  }