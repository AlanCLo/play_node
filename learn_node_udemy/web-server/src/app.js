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

app.get('/about', (req, res) => {
    res.render('index', {
        title: 'About',
        name: 'Me'
    })
})

app.get('/help', (req, res) => {
    res.render('index', {
        title: 'Help',
        name: 'Me'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }
    res.send({
        forecast: 'hot',
        location: 'here',
        address: req.query.address
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search)

    res.send({
        products: []
    })
})


app.get('*', (req, res) => {
    res.send('404')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
