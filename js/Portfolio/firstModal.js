$(document).ready(function(){
    $(".help").on("click", function(){
        $(".modal-awal").css("animation", "fadein .5s");
        $(".modal-awal").css("display","block");
        $(".image-map").addClass("dark");
    })
    $(".mute").on("click", function(){
        $(".mute").css("display","none");
        $(".music-on").css("display","block");
        // music on
    })
    $(".music-on").on("click", function(){
        $(".mute").css("display","block");
        $(".music-on").css("display","none");
        // mute
    })

    $(document).on('keydown',function (e){   
        $(".image-map").removeClass("dark");
        $(".modal-awal").css("animation", "fadeout .5s");
        setTimeout(function(){
            $(".modal-awal").css("display", "none");
        },500); 
    });
    $(".modal-awal").on('click',function (e){   
        $(".image-map").removeClass("dark");
        $(".modal-awal").css("animation", "fadeout .5s");
        setTimeout(function(){
            $(".modal-awal").css("display", "none");
        },500); 
    });
});