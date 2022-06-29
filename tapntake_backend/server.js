
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config()
const userRoute = require('./routes/shop')

let corsOptions = {
    origin: "http://localhost:8081"
}
app.use(cors(corsOptions))

mongoose.connect(process.env.DB_URL)
.then(()=> {
    console.log("Connected to the database!");
})
.catch(err =>{
    console.log("Cannot connect to the database!", err);
    process.exit();
});

app.use('/user', userRoute)
// app.use('/product', productRoute)


app.use(express.json())

app.set('port', process.env.PORT || 8080) 
app.listen(app.get('port'), () => {
    console.info(`Server listen on port ${app.get('port')}`);
})
