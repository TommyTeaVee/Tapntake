const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    userId:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    products:[{
        productId: String,
        quantity: {
            type:Number,
            defualt: 1
        }
    },],
    amount:{
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    }
    
})

module.exports = mongoose.model('order', orderSchema ) 