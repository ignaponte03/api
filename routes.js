const router = require('express').Router()
const cAuth = require('./modules/Auth/controller')
const cProducts = require('./modules/Products/controller')

router.post('/login', cAuth.getByEmail)
router.post('/register', cAuth.create)
router.get('/list', cAuth.getList)



router.get('/products', cProducts.getList)
router.delete('/products/:id', cProducts.delete)
router.post('/products', cProducts.create)

module.exports = router