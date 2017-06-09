import * as types from '../actions/ActionTypes';

const initialState = {
    loggedIn: false,
    errorMessage: null
}
export default function login(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true
            }
        case types.LOGIN_FAILURE:
            return {
                ...state,
                loggedIn: false, 
                errorMessage: action.error.message
            }
        default:
            return state
    }
}