const express = require('express');

const NoteController = require('../controllers/note-ctrlr');

const router = express.Router();

//creating a GET request route handler that will call our controller "getAllNotes".
router.get(`/notes`, NoteController.getAllNotes);
router.post(`/note`, NoteController.addNote);
router.delete(`/note/:noteId`, NoteController.deleteNote);

module.exports = router;