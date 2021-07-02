const fs = require('fs')

const validator = require('validator')

const add = require('./utils.js')
const getNotes = require('./notes.js')

//fs.writeFileSync('notes.txt', 'hello')

fs.appendFileSync('notes.txt', ' world')

console.log(add(1, 1))

console.log(getNotes())


console.log(validator.isEmail('blah@blah.com'))
console.log(validator.isEmail('blah.com'))
console.log(validator.isURL('https://blah.com'))

