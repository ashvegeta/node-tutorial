const {createReadStream } = require('fs')

const stream = createReadStream('./content/subfolder/bigfile.txt',{highWaterMark:80000 , encoding: 'utf8'})

// name of the event you are listening should be exact i.e in this case 'data' and 'error' 
stream.on('data',(res)=>{
    console.log(res)
})

stream.on('error',(err_res)=>{
    console.log("error is : ",err_res)
})