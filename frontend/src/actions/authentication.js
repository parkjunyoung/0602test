import axios from 'axios';
import React from 'react'
import { Redirect } from 'react-router';
import {
    LOGIN_SUCCESS, LOGIN_FAILURE,
    REGISTER_SUCCESS, REGISTER_FAILURE,
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
    // todo: make login request logic
    return (dispatch) => {
         dispatch(sendingRequest(true));

         return new Promise((resolve, reject) => {
             resolve(dispatch(loginSuccess({ email: 'ho1234c@gmail.com' })))
         })
    }
}

export function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        user
    };
}


export function registerRequest(email, password) {
  return dispatch => {
    dispatch(sendingRequest());

    return axios.post("/api/account/register", { email, password })
        .then(response => {
            dispatch(registerSuccess(response.data));
        })
        .catch(error => {
            switch(error.type){
                case 'EXISTING_EMAIL':
                    dispatch(encountError(errorMessage.EXISTING_EMAIL));
                    return;
                default:
                    dispatch(encountError(errorMessage.SERVER_ERROR));
                    return;
            }
      });
  };
}

export function registerSuccess(user) {
  return {
    type: REGISTER_SUCCESS,
    user
  };
}