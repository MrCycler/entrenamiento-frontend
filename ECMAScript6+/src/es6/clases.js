class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return valueA + valueB;
    }
}

// Inicializando un objeto
const calc = new calculator();
// Usando un metodo
console.log(calc.sum(2,2))