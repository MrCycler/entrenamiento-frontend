const video = document.querySelector("video");
const button = document.getElementById("playButton");
        
        
//definida la clase media player con configuracion inicial
function MediaPlayer(config){
    this.media = config.el
}

//Se agrega un metodo a la class MediaPlayer
MediaPlayer.prototype.play = function(){
    this.media.play()
};

MediaPlayer.prototype.pause = function(){
    this.media.pause()
};

MediaPlayer.prototype.togglePlay = function(){
    if(this.media.paused){
        this.play();
    }
    else
    {
        this.pause();
    }
};

//Instancia
const player = new MediaPlayer({ el: video});
//Usando el metodo
button.onclick = () => player.togglePlay();