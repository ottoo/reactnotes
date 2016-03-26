import fetch from 'isomorphic-fetch';
import { checkStatus } from './utils.js';

export const SAVE_NOTE = 'SAVE_NOTE';
export const SET_CURRENT_NOTE_ID = 'SET_CURRENT_NOTE_ID';

export function saveNote(note) {
    return { type: SAVE_NOTE, note };
}

export function setCurrentNoteId(noteId) {
    return { type: SET_CURRENT_NOTE_ID, noteId };
}

export function validateToken(token) {
    return dispatch => {
        return fetch('http://127.0.0.1:3333/user/me', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token: token
                })
            })
            .then(checkStatus)
            .then(response => response.json())
            .then(json => {
                return { token: json.token };
            })
            .catch(error => {
                console.log('request failed', error.response.message);
            });
    }
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
                return { isLoggedIn: true, token: json.token };
            })
            .catch(error => {
                console.log('request failed', error);
            });
    }
}
