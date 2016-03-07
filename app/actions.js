export const SAVE_NOTE = 'SAVE_NOTE';

export function saveNote(note) {
    return { type: SAVE_NOTE, note };
}