const mongoose = require('mongoose')

const connectionURL = 'mongodb://192.168.99.100:27017/task-manager-api'
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

