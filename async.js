// asynchrnous action 

const {readFile} = require('fs')

readFile('./content/subfolder/write.txt','utf8',(err , result) => {
    if(err){
        console.log(err)
        return
    }
    console.log('fninshed reading')
})

console.log('starting with next task')