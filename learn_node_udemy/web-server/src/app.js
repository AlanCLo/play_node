const path = require('path')
const express = require('express')
const hbs = require('hbs')

const publicDirectory = path.join(__dirname, '../public')
const viewDirectory = path.join(__dirname, '../templates/views')
const partialsDirectory = path.join(__dirname, '../templates/partials')

const app = express()
app.set('view engine', 'hbs')
app.set('views', viewDirectory)
hbs.registerPartials(partialsDirectory)

// Setup static dir to serve
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title: 'My App',
        name: 'Me'
    })
})

app.get('/something', (req, res) => {
    res.send('Something')
})
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'hot',
        location: 'here'
    })
})


app.get('*', (req, res) => {
    res.send('404')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
