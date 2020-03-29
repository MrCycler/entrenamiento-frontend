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

//L2 - Funciones en typescript

function add2(a:number, b:number):number{
    return a + b;
}

const sum2 = add(4,6);

function createAdder (a:number): (number)=>number{
    return function (b:number){
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);


//argumento opcional en funciones, argumento por defecto
function fullName (firstName: string, lastName?:string, apodo:string ="Unnamed"):string{
    return `${firstName} ${lastName} ${apodo}`
}

const richard = fullName ('Richard');
console.log(richard);

//L3 - Interfaces
//declaran la forma de un objeto
enum Color3 {
    Rojo = "Rojo",
    Verde = "Verde",
}
interface Rectangulo{
    ancho: number;
    alto: number;
    color?: Color3; //Opcional
}

let rect: Rectangulo ={
    ancho:4,
    alto:5,
    color:Color3.Rojo,
};

function area (r:Rectangulo){
    return r.ancho*r.alto;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function (){
    return `Un rectangulo ${this.color}`;
};

console.log()