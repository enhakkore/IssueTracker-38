const router = require('express').Router();
const issueService = require('../services/issue.service');
const errorCatcher = require('../middlewares/errorCatcher');

router.get('/', errorCatcher(issueService.readAll));
router.patch('/', errorCatcher(issueService.update));

module.exports = router;
