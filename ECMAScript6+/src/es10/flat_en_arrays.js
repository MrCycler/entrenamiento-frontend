let array = [1,2,3,[1,2,3,[1,2,3]]];

//Como parametro le pasas la profundidad
console.log(array.flat(2));


//expande un arreglo siguiendo una logica
console.log(array.flatMap(value => [value,value*2]))