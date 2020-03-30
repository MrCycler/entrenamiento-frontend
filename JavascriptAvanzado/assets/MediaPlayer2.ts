//definida la clase media player con configuracion inicial
class MediaPlayer {
    media : HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    initPlayer(){
        this.container = document.createElement('div');
        this.container.style.position = "relative";
        this.media.parentNode.insertBefore(this.container,this.media);
        this.container.appendChild(this.media);
    }
    //Se agrega un metodo a la class MediaPlayer
    private initPlugins() {
        // A cada plugin se le pasa el objeto de información reducida
        this.plugins.forEach(plugin => {
            plugin.run(this);
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