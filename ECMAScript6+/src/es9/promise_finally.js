// Promesa
const helloPromise = () => {
    return new Promise((resolve,reject) =>{
        (true)? resolve('Hello World'): reject (new Error('Test Error') )
    })
};

helloPromise()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(()=>console.log('finalizo'))