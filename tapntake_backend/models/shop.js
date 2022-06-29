const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
    shopname:{
        type: String,
        required: true
    },
    productList:[{
        productname: String,
        productdiscription: String,
        price: Number
    }]
    
})

module.exports = mongoose.model('Shop', shopSchema ) 