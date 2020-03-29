//definida la clase media player con configuracion inicial
class MediaPlayer {
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this._initPlugins();
    }
    //Se agrega un metodo a la class MediaPlayer
    _initPlugins() {
        //Objeto de información reducida
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            //Se uso getter y setters para definir en este objeto propiedades virtuales
            get muted() {
                return this.media.muted;
            },
            set muted(value) {
                this.media.muted = value;
            }
        };
        // A cada plugin se le pasa el objeto de información reducida
        this.plugins.forEach(plugin => {
            plugin.run(player);
        });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    toggleSoud() {
        if (this.media.muted) {
            this.unmute();
        }
        else {
            this.mute();
        }
    }
    togglePlay() {
        if (this.media.paused) {
            this.play();
        }
        else {
            this.pause();
        }
    }
}








export default MediaPlayer;