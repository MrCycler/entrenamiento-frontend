//definida la clase media player con configuracion inicial
function MediaPlayer(config){
    this.media = config.el
    this.plugins = config.plugins || [];
    this._initPlugins();
}

//Se agrega un metodo a la class MediaPlayer

MediaPlayer.prototype._initPlugins = function (){

    //Objeto de información reducida
    const player = {
        play: () => this.play(),
        media: this.media,
        //Se uso getter y setters para definir en este objeto propiedades virtuales
        get muted(){
            return this.media.muted;
        },
        set muted(value){
            this.media.muted = value;
        }
    };

    // A cada plugin se le pasa el objeto de información reducida
    this.plugins.forEach(plugin => {
        plugin.run(player);
    });
};

MediaPlayer.prototype.play = function(){
    this.media.play()
};

MediaPlayer.prototype.pause = function(){
    this.media.pause()
};

MediaPlayer.prototype.mute = function(){
    this.media.muted = true;
};

MediaPlayer.prototype.unmute = function(){
    this.media.muted = false;
};

MediaPlayer.prototype.toggleSoud = function(){
    if(this.media.muted){
        this.unmute();
    }
    else
    {
        this.mute();
    }
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

export default MediaPlayer;