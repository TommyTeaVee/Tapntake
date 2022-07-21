const mongoose = require('mongoose')

const User = mongoose.model(
    "User",
    new mongoose.Schema({

        name: String,
        email: String,
        password: String,
        img: {
            type: String,
            default: "https://www.thesait.org.za/global_graphics/default-store-350x350.jpg"
        },
        // roles: [
        //     {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: 'Role'
        //     }
        // ]
    })
)

module.exports = User