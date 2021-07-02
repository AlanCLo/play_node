const path = require('path')
const express = require('express')

const pub_dir = path.join(__dirname, '../public')

const app = express()
app.use(express.static(pub_dir))

app.get('/something', (req, res) => {
    res.send('Something')
})
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'hot',
        location: 'here'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
