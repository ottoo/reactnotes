import fetch from 'isomorphic-fetch';
import CONFIG from './../config';
import {
    checkStatus
} from './../utils.js';

export const SAVE_NOTE = 'SAVE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const SET_CURRENT_NOTE_ID = 'SET_CURRENT_NOTE_ID';

export const saveNote = (note) => ({
    type: SAVE_NOTE,
    note
});

export const updateNote = (note) => ({
    type: UPDATE_NOTE,
    note
});

export const setCurrentNoteId = (noteId) => ({
    type: SET_CURRENT_NOTE_ID,
    noteId
});

export const validateToken = (token) => {
    return dispatch => {
        return fetch(`${CONFIG.BACKEND_URL}/user/me`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token
                })
            })
            .then(checkStatus)
            .then(response => response.json())
            .then(json => ({ token: json.token }))
            .catch(error => {
                console.error('request failed', error.response.statusText);
            });
    };
}

export const login = (user) => {
    // return dispatch => {
        return fetch(`${CONFIG.BACKEND_URL}/user/login`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(checkStatus)
            .then(response => response.json())
            .then(json => ({
                isValid: true,
                token: json.token
            }))
            .catch(error => {
                console.error('request failed', error.response.statusText);
            });
    // };
}
