const dogs = [
    { name: 'Snickers', age: 2 },
    { name: 'Hugo', age: 8}
]

function makeGreen() {
    const p = document.querySelector('p')
    p.style.color = '#BADA55'
    p.style.fontSize = '50px'
}

//Regular
console.log('hello')

//Interpolated
console.log(`Hello I am a dog ${dogs.name}`)

//Styled
console.log('%cI am some great text', 'font-size: 50px')

//Warn
console.warn('OH NOOO')

//Error
console.error('SHIT!')

//Info
console.info('Crocodiles eat 3-4 people per year')

// Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'That is wrong!')

// Clearing
console.clear()

// view DOM elements
console.log(p)
console.dir(p) //dropdown menu
console.clear()

//grouping together 
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`) //remove 'Collapsed' to open dropdown in console
    console.log(`This is ${dog.name}`)
    console.log(`${dog.name} is ${dog.age} years old`)
    console.log(`${dog.name} is ${dog.age * 7} years old`)
    console.groupEnd(`${dog.name}`)
})

//counting
console.count('Wes')
console.count('Wes')
console.count('Wes')
console.count('Vonte')

//timing
console.time('fetching data')
fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
.then(data => {
    console.timeEnd('fetching data')
    console.log(data)
})

console.table()