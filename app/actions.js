import fetch from 'isomorphic-fetch';
import { checkStatus } from './utils.js';

export const SAVE_NOTE = 'SAVE_NOTE';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_CURRENT_NOTE_ID = 'SET_CURRENT_NOTE_ID';

export function saveNote(note) {
    return { type: SAVE_NOTE, note };
}

export function setToken(token) {
    return { type: SET_TOKEN, token };
}

export function setCurrentNoteId(noteId) {
    return { type: SET_CURRENT_NOTE_ID, noteId };
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
                dispatch(setToken(json.token));
                return { isLoggedIn: true, token: json.token };
            })
            .catch(error => {
                console.log('request failed', error);
            });
    }
}
