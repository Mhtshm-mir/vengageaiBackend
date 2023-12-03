const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config()
const url = process.env.DatabaseURL
const port = process.env.PORT
const cors= require("cors")
const bodyParser = require('body-parser');
const app = express();
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
const contactsRoutes = require('./routes/contactsRoutes');



app.use('/contacts', contactsRoutes);



mongoose.connect(url)
.then(()=>{
    console.log('connected to MongoDB');
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    })  
})
.catch((err)=>{
    console.error("MongoDB connection error:", err);

})