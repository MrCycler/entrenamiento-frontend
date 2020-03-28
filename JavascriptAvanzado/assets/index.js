import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector("video");
const playbutton = document.getElementById("playButton");
const mutebutton = document.getElementById("muteButton");

//Instancia
const player = new MediaPlayer({ el: video, plugins:[new AutoPlay, new AutoPause] });
//Usando el metodo
playbutton.onclick = () => player.togglePlay();
mutebutton.onclick = () => player.toggleSoud();