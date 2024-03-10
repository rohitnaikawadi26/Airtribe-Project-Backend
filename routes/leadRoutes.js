const express = require('express');
const router = express.Router();
const leadController = require('../controllers/leadController');

router.post('/:courseId/register', leadController.registerLead);
router.put('/:leadId/update', leadController.updateLead);
router.get('/search', leadController.searchLeads);

module.exports = router;
