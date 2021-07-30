const express=require('express')
const { Mongoose } = require('mongoose')
const customerRouter=require('./routes/customer')
const indexRouter=require('./routes/index')
const methodOverride = require('method-override')
require('dotenv').config()
const app = express()

const mongoose = require("mongoose")
const connectFunction=async()=>{
    try{
        await mongoose.connect(process.env.STR_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log("Connect successfully")
    }catch(e)
    {
        console.log(a)
        console.log("Connection failed")
    }
}
connectFunction()
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended    : false}))

app.set('view engine', 'ejs')
app.use('/',customerRouter)
app.use('/',indexRouter)
app.listen(process.env.PORT||3000)