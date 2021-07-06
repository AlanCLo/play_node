const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //return reject('blah')
            resolve(a + b)
        }, 1000)
    })
}

const doWork = async() => {
    const result = await add(1, 99)
    const result2 = await add(result, 100)
    return result2
}

doWork().then((result) => {
    console.log('Result', result)
}).catch((e) => {
    console.log('Error', e)
})
