


const square = (x) => {
    return x * x
}

const another_sq = (x) => x * x


console.log(square(2))

console.log(another_sq(3))


const event = {
    name: 'Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()



const tasks = {
    tasks: [
        {
            text: 'Groceries',
            completed: true
        },
        {
            text: 'Clean yard',
            completed: false
        },
        {
            text: 'Film',
            completed: false
        }
    ],
    getTasksToDo() {
        return this.tasks.filter((task) => task.completed === false)
    }
}
console.log(tasks.getTasksToDo())
