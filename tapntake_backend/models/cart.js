const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    userId:{
        type:String,
        required: true
    },
    products:[{
        productId: String,
        quantity: {
            type:Number,
            defualt: 1
        }
},]
    
})

module.exports = mongoose.model('Cart', cartSchema ) 