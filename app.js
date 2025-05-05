const express=require('express')
const app=express()
const cors=require('cors')
const dbconnect = require('./database/dbconnect')
require('dotenv').config('env')
app.use(express.json())
app.use(cors({
    origin:[process.env.FRONT_URL],
    methods:["POST"],
    credentials:true
}))
dbconnect()

app.use(express.urlencoded({extended:true}))

app.listen(process.env.PORT,()=>{
    console.log(`running in ${process.env.PORT}`)
})