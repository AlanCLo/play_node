
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://192.168.99.100:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    console.log('Successfully connected to Mongo DB database')

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name: 'Bob',
        age: 27
    }, (error, result) => {
        if (error) {
            return console.log('Error: unable to insert user')
        }
        console.log(result.ops)
    })

    db.collection('users').insertMany([
        {
            name: 'Mary',
            age: 34
        },
        {
            name: 'Jen',
            age: 28
        }
    ], (error, result) => {
        if (error) {
            return console.log('Error: unable to insert many users')
        }
        console.log(result.ops)
    })


    db.collection('users').findOne({ name: 'Jen', age: 28 }, (error, user) => {
        if (error) {
            return console.log('Error findOne user')
        }
        console.log(user)
    })

    db.collection('users').find({ age: 34 }).toArray((error, users) => {
        if (error) {
            return console.log('Error: find')
        }
        console.log(users)
    })

    db.collection('users').find({ age: 34 }).count((error, count) => {
        console.log(count)
    })


    console.log('trying update promise')

    // Using promises
    const updatePromise = db.collection('users').updateOne({
        name: 'Jen'
    }, {
        $set: {
            name: 'Mike'
        }
    })

    updatePromise.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('users').deleteMany({ 
        age: 27
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})
