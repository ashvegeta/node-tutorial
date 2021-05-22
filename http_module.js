const http = require('http')

// format -> http.createServer(requestListener);

// requestListener -> any function that gets executed 
// every time a server gets a request

const server = http.createServer((req , res) => {
    if(req.url == '/'){
        res.end('Welcome to home page')
    }

    else if(req.url == '/about'){
        res.end('About page')
    }

    else
    {
     res.end('<a href="/">Home</a>')
    }    
})

// listen at port 5000

server.listen(5000)