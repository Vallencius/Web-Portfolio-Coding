$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../audio/main.mp3');

    $('.mute').click(function() {
        audioElement.play();
        if (document.contains(document.getElementById("mainAudio"))) {
            document.getElementById("mainAudio").remove();
        }
    });
    
    $('.music-on').click(function() {
        audioElement.pause();
        if (document.contains(document.getElementById("mainAudio"))) {
            document.getElementById("mainAudio").remove();
        }
    });
});