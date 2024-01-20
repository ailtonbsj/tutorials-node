const express = require('express');
const login = require('../controllers/login');

const router = express.Router();

router.get('/', login.index);
router.post('/login-with-google', login.withGoogle);

module.exports = router;