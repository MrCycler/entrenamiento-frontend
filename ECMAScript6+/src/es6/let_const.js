// asignacion de variables var let ES6
{
    var globalvar = "global var"
}

{   
    //let se ejecuta en un contexto
    let globallet = "global let"
    console.log(globallet)
}

console.log(globalvar)

// constantes en ES6
const a = 'b';
a = 'a'; //error, no se puede asignar valor a una constante
console.log(a)