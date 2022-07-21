const express = require('express');
const app = express();
const cors = require('cors')

const corsOption = {
    origin: 'http://localhost:8010'
}

app.use(cors(corsOption))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



const db = require('./app/models')
const dbConfig = require('./app/config/db.config.js')
const { count } = require('./app/models/user.model')
const Role = db.role

require("./app/routes/auth.router")(app)
// require("./app/routes/user.router")(app)
require('./app/routes/shop.router')(app)
require('./app/routes/products.router')(app)

db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Successfully connected with MongoDB")
    // initial()

    }).catch(err => {
        console.error('Connection error:', err)
        process.exit()
    })


// function initial(){
//     Role.estimatedDocumentCount((err, count) => {
//         if(!err && count === 0){
//             new Role({
//                 name: 'user'
//             }).save(err => {
//                 if(err){
//                     console.log('error', err)
//                 }
//                 console.log("Added 'user' to roles collection")
//             })

//             new Role({
//                 name: 'moderator'
//             }).save(err => {
//                 if(err){
//                     console.log('error', err)
//                 }
//                 console.log("Added 'moderator' to roles collection")
//             })

//             new Role({
//                 name: 'admin'
//             }).save(err => {
//                 if(err){
//                     console.log('error', err)
//                 }
//                 console.log("Added 'admin' to roles collection")
//             })
//         }
//     })
// }

app.get('/', (req, res, next) => {
    res.send('<h1>Hello world<h1>');
})






app.set('port', process.env.PORT || 8000) 

app.listen(app.get('port'), () => {
    console.info(`Server listen on port ${app.get('port')}`);
})