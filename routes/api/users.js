const express = require('express')

const router = express.Router()

const usersCtrl = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

//POST
router.post('/', usersCtrl.create)

router.post('/login', usersCtrl.login)


// Insert ensureLoggedIn on all routes that need protecting
router.get('/check-token', ensureLoggedIn , usersCtrl.checkToken)

module.exports = router