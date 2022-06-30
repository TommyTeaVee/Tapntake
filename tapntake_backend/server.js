
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config()
const shopRoute = require('./routes/shop.route')
const createRoute = require('./routes/create.route')

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
app.use(express.json())
app.use('/shop', shopRoute)
app.use('/create', createRoute )

//app.use('/product', productRoute)

// app.get("/", (req,res)=>{
//     res.send("test is successful")
// })



app.set('port', process.env.PORT || 8080) 
app.listen(app.get('port'), () => {
    console.info(`Server listen on port ${app.get('port')}`);
})
