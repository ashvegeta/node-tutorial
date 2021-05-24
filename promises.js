const {readFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)

//alternate way
// const readFile = require('fs').promises



// promises in js accept a function with parameters 
// reject and resolve , if the conidtion is true it is 
// resolved else it is rejected with the error

const getText = (path) => {
    return new Promise((resolve , reject) => {
        readFile(path,'utf8',(err,result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        })
    })
}

// getText('./content/subfolder/write.txt').then((message)=> console.log('successfully read \n'+message))
// .catch((message) => console.log("failed "+message))

// declaration 1

const start = async() => {
    try{
        //using reafile and promisified readfile
        const text1 = await  getText('./content/subfolder/write.txt')
        const text2 = await readFilePromise('./content/subfolder/write.txt')
        console.log(text1+"\n"+text2)
    }
    catch(error){
        console.log(error)
    }
}

start()

// declaration 2

// const start = async function() {
//     try{
//         const text = await getText('.content/subfolder/write.txt')
//     }
//     catch(error){
//         console.log(error)
//     }
// }