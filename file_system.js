//example of blocking or synchronized

const {readFileSync , writeFileSync, readFile} = require('fs')

console.log('start\n')

const textfile1 = readFileSync('./content/subfolder/test.txt','utf-8')
const textfile2 = readFileSync('./content/subfolder/newtext.txt','utf-8')


writeFileSync(
'./content/subfolder/write.txt' ,
 '\ni modified the text again but appended' ,
 {flag : 'a'}
)

console.log('done with the task')
console.log('starting with next one')
