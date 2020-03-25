function* helloWorld(){
    if(true){
        yield 'Hello,';
    }
    if(true){
        yield 'World';
    }
};

//Se ejecuta diferente instancia cada cuanto se llame a la funcion
const generatorHello = helloWorld();
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
