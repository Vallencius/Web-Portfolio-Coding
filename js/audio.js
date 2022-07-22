$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../audio/main.mp3');
    audioElement.play();

    $('.mute').click(function() {
        audioElement.play();
    });
    
    $('.music-on').click(function() {
        audioElement.pause();
    });
});