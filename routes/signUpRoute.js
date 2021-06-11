const express = require('express')
const router = express.Router();

const {signUp} = require('../controllers/signUpController')

router.get('/', signUp)

module.exports = router;