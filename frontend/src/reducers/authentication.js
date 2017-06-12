import * as types from '../constants/ActionTypes';

const initialState = {
    register: {
        status: 'INIT',
        error: -1
    },
    currentlySending: false,
    currentUser: '',
    loggedIn: false,
    errorMessage: ''
};

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.user,
                loggedIn: true
            }
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                currentUser: action.user,
            }
        case types.SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.message
            }
        default:
            return state
    }
}