const express = require('express')
const app = express()
const middleware = require('./mware')
const authorize = require('./authorize')

// use the middleware for all the routes
app.use(['/','/api'],[authorize,middleware]) //applies to all routes that start with / or /api

// req => middleware => res

// const middleware = (req,res,next) => {
//     const method = req.method
//     const url = req.url
//     const time = new Date().getFullYear()
//     console.log(method,url,time)
//     next()
// }

// app.get(route,middleware,callback)

app.get('/',(req,res)=>{
    res.send('Home')
})

app.get('/about',(req,res)=>{
    res.send('About')
})

app.get('/api/products',(req,res)=>{
    res.send('products')
})

app.get('/api/items',(req,res)=>{
    res.send('items')
})

app.listen(5000,()=>{
    console.log('serving is listening at port 5000 ...')
})