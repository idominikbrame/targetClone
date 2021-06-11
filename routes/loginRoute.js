const express =require('express');

const router = express.Router();
const {showLoginPage} = require('../controllers/loginController')


router.get("/", showLoginPage)


module.exports = router;