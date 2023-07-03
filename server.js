const express = require('express')
const serverConfig = require('./configs/server.config.js') 
const mongoose = require('mongoose')
const dbConfig = require('./configs/db.config.js')

const app = express()




// connect mongodb and create an admin user , need to have mongo db up and running in local machines
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;

 db.on('error', ()=>{
    console.log('error while connecting to DB')

 });

 db.once('open', ()=>{
    console.log('DB is connected')
 })


app.listen(serverConfig.PORT, ()=>{
    console.log(`server is starting on port: ${serverConfig.PORT}`)
}) 

