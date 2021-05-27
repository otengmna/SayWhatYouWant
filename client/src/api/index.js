//creates api & its methods

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
});


export const getAllNotes = () => api.get(`/notes`);
export const insertNote = (note) => api.post(`/note`, note);
export const deleteNote = (noteId) => api.delete(`/note/${noteId}`);

const apis = {
    getAllNotes,
    insertNote,
    deleteNote
}

export default apis;