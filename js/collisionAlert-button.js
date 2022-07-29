$(document).ready(function () { 
    $(document).on('touchend',function (e){
        //collision check with blue hitbox
            $(".blue-msg").css("display", "none");
            $(".green-msg").css("display", "none");
            $(".red-msg").css("display", "none");
            $(".orange-msg").css("display", "none");
            $(".purple-msg").css("display", "none");
            $(".house-msg").css("display", "none");
            $(".menu-msg").css("display", "none");
    });
    $(".btn-close").on('click',function (e){
        $(".modal-detail").css("animation", "fadeout .5s");
        $(".home-display").removeClass('dark');
        //delay 0.5s
        setTimeout(function(){
            $(".modal-detail").css("display", "none");
            $(".modal-detail-achievement").css("display", "none");
            $(".modal-detail-experience").css("display", "none");
            $(".modal-detail-myinfo").css("display", "none");
            $(".modal-detail-education").css("display", "none");
            $(".modal-detail-skills").css("display", "none");
        },500); 
    });
});