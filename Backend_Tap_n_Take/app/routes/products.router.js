module.exports = app => {
    const product = require('../controllers/products.controller.js')
    const getShop = require('../middlewares/shop.middleware.js')

    const router = require('express').Router() 

    router.post('/:id', product.create)

    router.get('/:id/all',product.menu)

    router.get('/all', product.findAll)

    router.get('/:id', product.findOne)

    router.put('/:id', product.update)

    router.delete('/:id', product.delete)

    router.delete('/:id/all', product.deleteAll) //Shop id

    app.use('/api/menu', router)
}