const express = require('express')
const app = express()
let {people} = require('./data')

//static files
app.use(express.static('./public'))

// to parse json contents 
app.use(express.json())

//to parse url contents
app.use(express.urlencoded({extended: false}))

app.get('/api/people',(req,res)=>{
    res.status(200).json({success: true,data: people})
})

app.post('/login',(req,res)=>{
    const {name} = req.body;
    // console.log(Name,req.body)
    if(name)
    {
        return res.status(200).send(`welcome ${name}`)
    }

    res.status(401).send('please provide credentials')
})

app.post('/api/people',(req,res)=>{
    const {name} = req.body
    //console.log(name)
    if(!name)
    {
        //console.log('name error')
        return res.status(400).json({success:false,msg:'please provide name'})
    }

    res.status(201).json({success:true,person: name})
})

app.listen(5000,()=>{
    console.log('server listening at port 5000 ...')
})