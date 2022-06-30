const mongoose = require('mongoose')



const shopSchema = new mongoose.Schema({
    shopname: String,
    image: String,
    description: String,
    email:{
        type: String,
        required: true
    }
    
})

module.exports = mongoose.model('shop', shopSchema ) 