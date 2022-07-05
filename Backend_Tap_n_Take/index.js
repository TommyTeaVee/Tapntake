const express = require('express');
const app = express();
const cors = require('cors')

const corsOption = {
    origin: 'http://localhost:8010'
}

app.use(cors(corsOption))
app.use(express.json())

app.set('port', process.env.PORT || 8000) 

const db = require('./app/models')
const dbConfig = require('./app/config/db.config.js')

db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Successfully connect to MongoDB.'))

app.get('/', (req, res, next) => {
    res.send('<h1>Hello world<h1>');
})

require('./app/routes/shop.router')(app)
require('./app/routes/products.router')(app)


app.listen(app.get('port'), () => {
    console.info(`Server listen on port ${app.get('port')}`);
})