const express = require('express')
const router = express.Router();
const {getAllURL, createShortURL, getRedirectURL, deleteEntry} = require('../controllers/controller')

router.route('/').get(getAllURL).post(createShortURL)
router.route('/:shortId').get(getRedirectURL).delete(deleteEntry)


module.exports = router;
