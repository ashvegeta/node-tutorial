const path = require('path')

console.log("\nseperator: ",path.sep)

const filepath = path.join('/content','subfolder','test.txt')

console.log('\nfilepath : ',filepath)

const base = path.basename(filepath)

console.log('\nbase path: ',base)

const absolute2 = path.resolve(__dirname ,'content', 'subfolder' , 'test.txt')
console.log('\nabsolute path: ',absolute2)