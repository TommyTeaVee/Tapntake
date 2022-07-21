const product = require('../controllers/products.controller.js')
const { authJwt } = require('../middlewares')

module.exports = app => {

    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        )

        next()
    })

    const router = require('express').Router() 

    router.post('/:id', [authJwt.verification], product.create)

    router.get('/:id/all',product.menu)

    router.get('/all', product.findAll)

    router.get('/:id', product.findOne)

    router.put('/:id', product.update)

    router.delete('/:id', product.delete)

    router.delete('/:id/all', product.deleteAll) //Shop id

    app.use('/api/menu', router)
}