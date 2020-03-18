export function fetchAttractions(destinationId) {
    return (dispatch) => {
      dispatch({ 
          type: 'FETCHING_ATTRACTIONS' 
        });
      fetch(`/destinations/${destinationId}/attractions`)
        .then(response => response.json())
        .then(attractions => dispatch({ 
            type: 'LOADED_ATTRACTIONS', 
            payload: attractions 
        }));
    };
  }