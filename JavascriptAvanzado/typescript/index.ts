console.log("Hola soy typescript");

function add (a:number,b:number){
    return a + b;
}

const sum = add(2,3);

//L1 - Tipos en typescript

//Boolean
let muted:boolean = true;
muted = false;

//Number
let numerador:number = 42;
let denominador:number = 6;
let resultado = numerador/denominador;

//String
let nombre:string = "Richard";
let saludo = `Hola soy ${nombre}`;

//Arreglos
let people:string[] = [];
people = ["isabel","nicole","raul"];
people.push("juan");

//Arreglos con 2 tipos
let people2: Array<string|number>=[];
people2 = ["isabel","nicole","raul"];
people2.push(2);

//Enum - Tipo especial de enumeracion
enum Color{
    Rojo, //Asigna numero 1
    Verde, //Asigna numero 2
    Azul, //Asigna numero 3
}

let colorfavorito : Color = Color.Azul;
console.log(`mi color favorito es ${colorfavorito}`);

enum Color2{
    Rojo="rojo", //Asigna numero 1
    Verde="verde", //Asigna numero 2
    Azul="azul", //Asigna numero 3
}

let colorfavorito2 : Color2 = Color2.Azul;
console.log(`mi color favorito es ${colorfavorito2}`);

//any
let comodin: any = "Joker";
comodin = {type:'Wildcard'};

//Object
let someObject: object ={
propiedad: "valor",
}

