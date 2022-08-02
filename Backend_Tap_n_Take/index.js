const express = require('express');
const app = express();
const cors = require('cors')



// const corsOption = {
//     origin: 'http://localhost:8010'
// }

app.use(cors()) //app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({ extended: true }))


app.set('port', process.env.PORT || 8000) 



const db = require('./app/models')
const dbConfig = require('./app/config/db.config.js')




db.mongoose.connect(`${dbConfig.db}`, {
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

require("./app/routes/auth.router")(app)
require('./app/routes/shop.router')(app)
require('./app/routes/products.router')(app)


app.listen(app.get('port'), () => {
    console.info(`Server listen on port ${app.get('port')}`);
})