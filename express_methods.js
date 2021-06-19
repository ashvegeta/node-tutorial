const express = require('express')
const app = express()
let people = require('./routes/people')
let auth = require('./routes/auth')

//static files
app.use(express.static('./public'))

// to parse json contents 
app.use(express.json())

//to parse url contents
app.use(express.urlencoded({extended: false}))


//route handling for /login
app.use('/login',auth)

//route handling for /api/people
app.use('/api/people',people)


//setup port 
app.listen(5000,()=>{
    console.log('server listening at port 5000 ...')
})