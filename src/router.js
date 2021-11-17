const express = require('express')
const router = express.Router()

const {health} = require('./controllers/health')
const product = require('./controllers/product')
const user = require('./controllers/user')

const auth = require('./middleware/auth');

router.get('/health', health)

router.get('/product', auth, product.getAll)
router.get('/product/:id', auth, product.getOne)
router.post('/product', auth, product.create)
router.patch('/product/:id', auth, product.update)
router.delete('/product/:id', auth, product.delete)

router.post('/login', user.login)
router.post('/register', user.register)
router.get('/user', auth, user.myprofile)

module.exports = router