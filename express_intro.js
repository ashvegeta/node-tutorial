const express = require('express')
const path = require('path')
const app = express()


app.use(express.static('./public'))

// app.get
app.get('/',(req,res)=>{
    //res.status(200).send('Home Page')
    res.sendFile(path.resolve(__dirname,'./content/subfolder/write.txt'))
})

app.get('/about',(req,res)=>{
    res.status(200).send('About')
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1> page not found </h1>')
})



app.listen(5000,()=>{
    console.log("express is listening on port 5000 ...")
})
    