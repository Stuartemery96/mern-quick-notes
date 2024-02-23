// routes/api/notes.js
const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start with '/api/notes' (root)

// get ('/') Index
router.get('/', ensureLoggedIn, notesCtrl.index);
// post ('/create')
router.post('/create', ensureLoggedIn, notesCtrl.create)
router.delete('/:noteId', ensureLoggedIn, notesCtrl.delete)


module.exports = router;