import MediaPlayer from "../MediaPlayer2";

class AutoPlay {
    constructor() {}

    run(player: MediaPlayer) {
        //Uso de la propiedad definida con getters y setters
        if (!player.media.muted) {
            player.media.muted = true;
        }
        player.play();
    }
}


export default AutoPlay;

