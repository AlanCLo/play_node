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



const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            lat: 0,
            long: 0
        }

        callback(data)
    }, 1000)
}

geocode('Melbourne', (data) => {
    console.log(data)
})


console.log('Stopping')
