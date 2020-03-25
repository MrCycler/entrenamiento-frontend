const names = [
    { name: 'Oscar', age: 32},
    { name: 'Yesica', age: 27}
]

//map
let listOfNames = names.map(
    function (item){
        console.log(item.name);
    }
)

//arrow function en ES6
let listOfNames2 = names.map(item => console.log(item.name));


//estructura de arrow functions
const listOfNames3 = (name,age,country) => {
    console.log('ga')
}

const listOfNames4 = name => { 
    console.log('ga')
}

//ejemplo arrow function
const square = num => num*num;
