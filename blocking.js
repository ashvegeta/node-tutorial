const http = require('http')

const server = http.createServer((req,res) => {
 if(req.url == '/'){
     res.end('Home Page')
 }

 else if(req.url == '/about'){
     //blocking code
     for(let i=0 ; i < 300 ; i++){
         for(let j=0;j < 300 ; j++){
             console.log(`${i} ${j}`)
         }
     }
     res.end('about page')
 }

    else{
        res.end('Page Not Found')
    }
     
})

server.listen(5000 , () => {
    console.log('listening at port 5000 ...')
})