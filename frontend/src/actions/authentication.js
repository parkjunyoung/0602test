import axios from 'axios';
// import React from 'react'
import {
    LOGIN_SUCCESS, LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    SET_ERROR_MESSAGE, SENDING_REQUEST
} from '../constants/ActionTypes';
import * as errorMessage from '../constants/Message';

// this action for progress bar
function sendingRequest(sending){
    return { type: SENDING_REQUEST, sending };
}

function encountError(message){
    return { type: SET_ERROR_MESSAGE, message }
}

export function loginRequest(email, password) {
    return dispatch => {
        dispatch(sendingRequest(true));
    
        return axios.post("/api/account/login", { email, password }).then(response => {
                dispatch(loginSuccess(response.data.user));
            }).catch(error => {
                switch(error.response.data){
                    case 'PASSWORD_NOT_MATCH':
                        dispatch(encountError(errorMessage.PASSWORD_NOT_MATCH));
                        return;
                    case 'NOT_EXSITING_EMAIL':
                        dispatch(encountError(errorMessage.NOT_EXSITING_EMAIL));
                        return;
                    default:
                        dispatch(encountError(errorMessage.SERVER_ERROR));
                        return;
                }
            }).then(() => {
                dispatch(sendingRequest(false));            
            })
  };
}

export function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        user
    };
}

export function logoutRequest(){
    return dispatch => {
        dispatch(sendingRequest(true));

        return axios.post("/api/account/logout").then(response => {
            dispatch(logoutSuccess());
        }).catch(error => {
            dispatch(encountError(errorMessage.SERVER_ERROR));
        }).then(() => {
                dispatch(sendingRequest(false));            
            })
    }
}

export function logoutSuccess(){
    return {
        type: LOGOUT_SUCCESS,
    }
}

export function registerRequest(email, password, name) {
    return dispatch => {
        dispatch(sendingRequest(true));
    
        return axios.post("/api/account/register", { email, password, name }).then(response => {
                dispatch(registerSuccess(response.data));
            }).catch(error => {
                switch(error.response.data){
                    case 'EXISTING_EMAIL':
                        dispatch(encountError(errorMessage.EXISTING_EMAIL));
                        return;
                    case 'DUPLICATE_EMAIL':
                        dispatch(encountError(errorMessage.DUPLICATE_EMAIL));
                        return;
                    default:
                        dispatch(encountError(errorMessage.SERVER_ERROR));
                        return;
                }
            }).then(() => {
                dispatch(sendingRequest(false));            
            })
  };
}

export function registerSuccess(user) {
  return {
    type: REGISTER_SUCCESS,
    user
  };
}