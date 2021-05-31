const fs = require('fs')
const http = require('http')

const server = http.createServer((req,res)=>{
    //const file = readFileSync('./content/subfolder/bigfile.txt','utf8')
    const fileStream = fs.createReadStream('./content/subfolder/bigfile.txt','utf8')
    // fileStream.on('open',()=>{
    //     fileStream.pipe(res)
    // })
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
})

server.listen(5000)