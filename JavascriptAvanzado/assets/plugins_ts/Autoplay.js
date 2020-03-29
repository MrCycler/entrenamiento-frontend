function AutoPlay(){
 
}

AutoPlay.prototype.run = function(player){
    //Uso de la propiedad definida con getters y setters
    if (!player.muted){
        player.muted =true;
    }
    player.play();
};

export default AutoPlay;