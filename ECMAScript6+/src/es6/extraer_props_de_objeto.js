let person = {
    'name':'oscar',
    'age': 32,
    'country': 'peru'
}

//extraccion por defecto
console.log(person.name,person.age)

//extraccion en ES6
let {name,age,country} = person;
console.log(name,age,country)