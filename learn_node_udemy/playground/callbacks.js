setTimeout(() => {
    console.log('1 sec')
}, 1000)

const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter((name) => {
    return name.length <= 4
})


