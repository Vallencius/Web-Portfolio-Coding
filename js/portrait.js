$(document).ready(function(){
    window.setInterval(function(){
        if($(window).height()>$(window).width()){
            $(".portrait-mode").css("display", "block");
        }else{
            $(".portrait-mode").css("display", "none");
        }
    }, 500);

        // New event listener:
    window.addEventListener("load",function() {
        setTimeout(function(){
            // Hide the address bar:
            window.scrollTo(0, 1);
        }, 0);
    });
});
