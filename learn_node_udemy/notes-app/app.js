const fs = require('fs')

const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'A title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'A body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log(chalk.bold.green('Adding note: ' + argv['title']))
        notes.addNote(argv['title'], argv['body'])
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder: {
        title: {
            describe: 'The title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv['title'])
        console.log(chalk.bold.red('Removed ' + argv['title']))
    }
})

yargs.argv

notes.listNotes()

