const express = require('express')
const serverConfig = require('./configs/server.config.js') 
const app = express()

app.listen(serverConfig.PORT, ()=>{
    console.log(`server is starting on port: ${serverConfig.PORT}`)
}) 

