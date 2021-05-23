// asynchrnous action 

const {readFile} = require('fs')

console.log('starting first task')

readFile('./content/subfolder/write.txt','utf8',(err , result) => {
    if(err){
        console.log(err)
        return
    }
    console.log('finished reading')
})

console.log('starting with next task')