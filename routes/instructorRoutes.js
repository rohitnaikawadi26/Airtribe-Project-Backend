const express = require('express');
const router = express.Router();
const instructorController = require('../controllers/instructorController');

router.post('/', instructorController.createInstructor);
router.post('/:leadId/comment', instructorController.addComment);

module.exports = router;
