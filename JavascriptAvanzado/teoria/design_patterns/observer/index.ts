//Interfaces de los observadores y el sujeto observado
interface Observer{
    update: (data:any)=>void
}

interface Subject{
    subscribe: (observer:Observer)=>void
    unsubscribe:(observer:Observer)=>void
}

//Bitcoin Price es el sujeto, suscribe a los observadores, desuscribe y notifica

class BitcoinPrice implements Subject{
    observers: Observer[] = [];

    constructor(){
        const el :HTMLInputElement= document.querySelector("#value");
        el.addEventListener('input',()=>{
            this.notify(el.value);
        });
    }

    subscribe (observer: Observer){
        this.observers.push(observer);
    }
    unsubscribe (observe:Observer){
        const index = this.observers.findIndex(obs =>
            {
                return obs ===observe;
            })
        this.observers.splice(index,1);
    }
    notify(data){
        this.observers.forEach(observer => observer.update(data));
    }
}

//Price Display es un observador que al ser notificado ejecuta una accion con los datos

class PriceDisplay implements Observer{
    private el: HTMLElement;
    constructor(){
        this.el = document.querySelector("#price")
    }
    update(data:any){
        this.el.innerText = data;
    }
}

//Logica: suscribimos y desuscribimos despues de un tiempo
const value = new BitcoinPrice();
const display = new PriceDisplay();
value.subscribe(display);
setTimeout(
    ()=>value.unsubscribe(display),
    10000
)