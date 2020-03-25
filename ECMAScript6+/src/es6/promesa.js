// Promesas en ES6
const helloPromise = () => {
    return new Promise((resolve,reject) =>{
        if(false){
            resolve('Hey');
        }
        else{
            reject('Error');
        }
        
    })
}
//Uso de la promesa
helloPromise().then(response => console.log(response)).catch(error => console.log(error));