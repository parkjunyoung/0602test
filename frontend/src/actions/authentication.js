import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './ActionTypes';

export function loginRequest(email, password) {
    // todo: login request
    return (dispatch) => {
         dispatch(login());

         return new Promise((resolve, reject) => {
             resolve(dispatch(loginSuccess({ email: 'ho1234c@gmail.com' })))
         })
    }
}

export function login() {
    return {
        type: LOGIN
    };
}

export function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        user
    };
}

export function loginFailure() {
    return {
        type: LOGIN_FAILURE
    };
}