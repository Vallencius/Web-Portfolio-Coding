$(document).ready(function(){
    $(document).on('keydown',function (e){   
        $(".home-display").removeClass("dark");
        $(".modal-awal").css("animation", "fadeout .5s");
        setTimeout(function(){
            $(".modal-awal").css("display", "none");
        },500); 
    });
    $(".modal-awal").on('click',function (e){   
        $(".home-display").removeClass("dark");
        $(".modal-awal").css("animation", "fadeout .5s");
        setTimeout(function(){
            $(".modal-awal").css("display", "none");
        },500); 
    });
});