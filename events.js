const EventEmitter = require('events')
const http = require('http')

const customemitter = new EventEmitter()

// creates a custom event listener by name 'response'
customemitter.on('response',(name,age)=>{
    console.log(`name : ${name}`)
    console.log(`age : ${age}`)
})


// can add another function listening to the same event and do some other logic

customemitter.on('response',()=>{
console.log('second listener')
})

// listen to the 'response' event
customemitter.emit('response','ashik',20)



//event emitter for server

const server = http.createServer()

server.on('request',(req,res)=>{ 
    res.end('welcome')
})

server.listen(5000)
