const fs = require('fs')

const book = {
    title: 'hello',
    author: 'me'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)

const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)


const dataBuffer = fs.readFileSync('book.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data)
