const mongoose = require('mongoose')
const validator = require('validator')

const connectionURL = 'mongodb://192.168.99.100:27017/task-manager-api'
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email')
            }
        }
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be positive')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    }
})

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const user1 = new User({
    name: 'Andrew',
    email: 'andrew@andrew.andrew',
    age: 26,
    password: 'blahblah'
})

const task = new Task({
    description: 'Learn',
    completed: false
})

user1.save().then((user) => {
    console.log(user)
}).catch((error) => {
    console.log('Error', error)
})
task.save().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
