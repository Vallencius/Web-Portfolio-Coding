$(document).ready(function(){
    window.setInterval(function(){
        if($(window).height()>$(window).width()){
            $(".portrait-mode").css("display", "block");
        }else{
            $(".portrait-mode").css("display", "none");
        }
    }, 500);
});