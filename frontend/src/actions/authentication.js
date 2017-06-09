import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE
} from './ActionTypes';

export function loginRequest(email, password) {
    
}

export function login() {
    return {
        type: AUTH_LOGIN
    };
}

export function loginSuccess(user) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        user
    };
}

export function loginFailure() {
    return {
        type: AUTH_LOGIN_FAILURE
    };
}