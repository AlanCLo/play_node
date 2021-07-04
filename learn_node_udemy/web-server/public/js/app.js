console.log('Client side')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    console.log('location: ' + location)

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            }
            else {
                const message1 = document.querySelector('#message1')
                const message2 = document.querySelector('#message2')
                const message3 = document.querySelector('#message3')
                message1.textContent = 'Forecast: ' + data.forecast
                message2.textContent = 'Location: ' + data.location
                message3.textContent = 'Address: ' + data.address
            }
        })
    })
})
