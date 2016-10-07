//post using fetch
//async action use thunk middleware dispatch action
var FETCH_CHEESES = 'FETCH_CHEESES';
function fetchCheesesReq() {
    return function(dispatch) {
        return fetch('/cheeses').then(function(res, err) {
            if (err) {
                return dispatch(fetchCheesesError(err));
            }
            return res.json();
        }).then(function(response) {
            return dispatch(fetchCheesesSuccess(response.guesses))
        });
    };
}
            
var POST_FEWEST_GUESSES_SUCCESS = 'POST_FEWEST_GUESSES_SUCCESS';
function postFewestGuessesSuccess(lowestNumber) {
    return {
        type: POST_FEWEST_GUESSES_SUCCESS,
        payload: lowestNumber
    };
}

var FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
function fetchCheesesError(error) {
    return {
        type: FETCH_CHEESES_ERROR,
        error: error
    }
}