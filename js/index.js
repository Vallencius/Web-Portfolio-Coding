$(document).ready(function(){
    $(".about").on("click", function(){
        $(".modal-about").css("display", "block");
        $(".main-display").addClass("dark");
        $(".modal-about").css("animation", "fadein .5s");
    });
    $(".btn-close").on('click',function (e){
        $(".modal-about").css("animation", "fadeout .5s");
        $(".main-display").removeClass("dark");

        //delay 0.5s
        setTimeout(function(){
            $(".modal-about").css("display", "none");
        },500); 
    });
});