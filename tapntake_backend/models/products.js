const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    image: String,
    desc: String,
    price:{
        type: Number,
        required: true
    },
    category:[]
    
})

module.exports = mongoose.model('product', productSchema ) 