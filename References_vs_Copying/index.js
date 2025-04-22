//strings, numbers, booleans
let age = 100
let age2 = age
console.log(age, age2)
age = 200
console.log(age, age2)

let name = "Vonte"
let name2 = name
console.log(name, name2)
name = 'Lamar'
console.log(name, name2)

//Array
const players = [
    'Vonte',
    'Freddie',
    'Xavier'
]
const team = players
console.log(players, team)
team[3] = 'Lux'

//copies old array
const team2 = players.slice()

//creates new array and concat old one inside
const team3 = [].concat(players)

//spread operator
const team4 = [...players]
team4[3] = 'hee hawww'
console.log(team4)

const team5 = Array.from(players)

const person = {
    name: 'Vonte',
    age: 25
}
const captain = person
captain.number = 99
const cap2 = Object.assign({}, person, {number: 99})
console.log(cap2)

//object spread
const cap3 = {...person}    //shallow - only goes 1 lv deep

const vonte = {
    name: 'Vonte',
    age: 25,
    spcial: {
        tiktok: '@vonte2000',
        youtube: 'vonte2000'
    }
}

const dev = Object.assign({}, vonte)
const dev2 = JSON.parse(JSON.stringify(vonte))
console.clear()
console.log(vonte)

