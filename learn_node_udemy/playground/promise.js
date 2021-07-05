
const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello world')
        reject('bye world ') // This won't run unless the above resolve() call is commented
    }, 1000)
})

doWorkPromise.then((result) => {
    console.log('Resolved! ', result)
}).catch((error) => {
    console.log('Reject! ', error)
})

