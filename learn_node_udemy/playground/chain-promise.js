const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //reject('blah')
            resolve(a + b)
        }, 1000)
    })
}

add(1, 2).then((result) => {
    console.log('Chain 1: ', result)
    return add(result, 3)
}).then((result2) => {
    console.log('Chain 2: ', result2)
}).catch((e) => {
    console.log('Error', e)
})
