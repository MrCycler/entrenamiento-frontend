class AutoPause{

    constructor(){
        this.threshold = 0.25;
        //Los manejadores tienen que ejecutarse en el contexto de AutoPause de modo que accedan
        // al objeto player
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    run(player){

        this.player = player;

        /*Observador de interseccion, sirve para observar los elementos y si cruzan un umbral nos lo notifica 
        para tomar una accion, el umbral se define como un porcentaje que tiene interseccion con el viewport
        (la parte visible de la página)*/

        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold,
        });
        /*El objeto Intersection Observer recibe la funcion a ejecutar si se cumple condicion (handler) y la 
        condicion */

        observer.observe(this.player.media);

        /* Visibility Change, agrega un manejador para cuando no se tenga visibilidad de la pantalla*/
        document.addEventListener("visibilitychange", this.handleVisibilityChange);
        
    }
    handlerIntersection(entries){
        console.log("threshold superado");
        const entry = entries[0];
        const isVisible = entry.intersectionRatio >= this.threshold;
        if (isVisible){
            this.player.play();
        }
        else{
            this.player.pause();
        }
    }

    handleVisibilityChange(){
        const isVisible = document.visibilityState ==="visible";
        if(isVisible){
            this.player.play();
        }
        else{
            this.player.pause();
        }
    }
}

export default AutoPause;

