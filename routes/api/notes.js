// routes/api/notes.js
const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start with '/' (root)

// POST ('/') Index
router.post('/', ensureLoggedIn, notesCtrl.index);

module.exports = router;