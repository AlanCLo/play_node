const fs = require('fs')

const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

const add = require('./utils.js')


// Write example
//fs.writeFileSync('notes.txt', 'hello')
fs.appendFileSync('notes.txt', ' world')

// Function example
console.log(add(1, 1))

// Using a package example
console.log(validator.isEmail('blah@blah.com'))
console.log(validator.isEmail('blah.com'))
console.log(validator.isURL('https://blah.com'))

// Printing in colour
msg = chalk.bold.green('Chalk bold green')
console.log(msg)

// argv
console.log(process.argv)
console.log(process.argv[2])

command = process.argv[2]

if (command === "hello") {
    console.log("world")
}


yargs.command({
    command: 'hello',
    describe: 'Do a hello world',
    builder: {
        title: {
            describe: "A title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        console.log("yargs handler: hello world!")
        console.log("yargs handler: ", argv['title'])
    }
})

console.log(yargs.argv)

