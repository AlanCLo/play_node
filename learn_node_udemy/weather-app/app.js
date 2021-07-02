const request = require('request')

console.log('Starting')

// Don't forget to start the file server...see README
const url = 'http://localhost:8000/test.json'

request({ url: url, json: true}, (error, response) => {
    if (error) {
        console.log(error)
        console.log(response)
    }
    else if (response.body.error) {
        console.log('Params were wrong')
    }
    else {
        console.log(response.body.currently)
    }
})

/*
setTimeout(() => {
    console.log('2 second timer')
}, 2000)
*/


console.log('Stopping')
