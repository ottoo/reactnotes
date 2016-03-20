import fetch from 'isomorphic-fetch';
import { checkStatus, parseJson } from './utils.js';

export const SAVE_NOTE = 'SAVE_NOTE';
export const SET_TOKEN = 'SET_TOKEN';

export function saveNote(note) {
    return { type: SAVE_NOTE, note };
}

export function setToken(token) {
    return { type: SET_TOKEN, token };
}

export function login(email, password) {
    return dispatch => {
        return fetch('http://127.0.0.1:3333/user/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            })
            .then(checkStatus)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                dispatch(setToken(json.token));
            })
            .catch(error => {
                console.log('request failed', error);
            });
    }
}
