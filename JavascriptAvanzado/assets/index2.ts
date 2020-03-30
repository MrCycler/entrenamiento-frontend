import MediaPlayer from './MediaPlayer2';
import AutoPlay from './plugins_ts/Autoplay';
import AutoPause from './plugins_ts/AutoPause';
import Ads from './plugins_ts/Ads';

const video = document.querySelector("video");
const playbutton : HTMLElement = document.getElementById("playButton");
const mutebutton : HTMLElement = document.getElementById("muteButton");

//Instancia
const player = new MediaPlayer({ el: video, plugins:[new AutoPlay(), new AutoPause(),new Ads()] });
//Usando el metodo
playbutton.onclick = () => player.togglePlay();
mutebutton.onclick = () => player.toggleSoud();

