//Pasar valores por defecto con harcoding
function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name,age,country);
 }

 //Pasar valores en ES6
 function newFunction2(name = 'oscar', age = 32, country = 'MX'){
    console.log(name,age,country);
 }

 //tomara los elementos por defecto
 newFunction2();
 //tomara los elementos dados
 newFunction2('juan',45,'PER');

