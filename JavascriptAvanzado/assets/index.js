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


//Se realiza el registro de un Service Worker
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(
        error => {console.log(error.message);}
    );
}