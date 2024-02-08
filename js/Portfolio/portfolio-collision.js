$(document).ready(function () {
    const movement = $(window).width()/40;
        
    var isOpen1 = 0;
    var isOpen2 = 0;
    var isOpen3 = 0;
    var isOpen4 = 0;
    var isOpenBack = 0;
    $(document).on('keyup',function (e){   
        // Hitboxes
        var meBot = (($(".me").position().top) + $(".me").height()+ $(".image-map").height());
        var meTop = ($(".me").position().top + $(".image-map").height());
        var meLeft = ($(".me").position().left);
        var meRight = $(".me").position().left + $('.me').width();
        var hitDoorTop = $(".hitbox-door").position().top;
        var hitDoorBot = ($(".hitbox-door").position().top + $(".hitbox-door").height());
        var hitDoorLeft = $(".hitbox-door").position().left;
        var hitDoorRight = $(".hitbox-door").position().left + $(".hitbox-door").width();
        var hitPort1Top = $(".hitbox-portfolio-1").position().top;
        var hitPort1Bot = ($(".hitbox-portfolio-1").position().top + $(".hitbox-portfolio-1").height());
        var hitPort1Left = $(".hitbox-portfolio-1").position().left;
        var hitPort1Right = $(".hitbox-portfolio-1").position().left + $(".hitbox-portfolio-1").width();
        var hitPort2Top = $(".hitbox-portfolio-2").position().top;
        var hitPort2Bot = ($(".hitbox-portfolio-2").position().top + $(".hitbox-portfolio-2").height());
        var hitPort2Left = $(".hitbox-portfolio-2").position().left;
        var hitPort2Right = $(".hitbox-portfolio-2").position().left + $(".hitbox-portfolio-2").width();
        var hitPort3Top = $(".hitbox-portfolio-3").position().top;
        var hitPort3Bot = ($(".hitbox-portfolio-3").position().top + $(".hitbox-portfolio-3").height());
        var hitPort3Left = $(".hitbox-portfolio-3").position().left;
        var hitPort3Right = $(".hitbox-portfolio-3").position().left + $(".hitbox-portfolio-3").width();
        var hitPort4Top = $(".hitbox-portfolio-4").position().top;
        var hitPort4Bot = ($(".hitbox-portfolio-4").position().top + $(".hitbox-portfolio-4").height());
        var hitPort4Left = $(".hitbox-portfolio-4").position().left;
        var hitPort4Right = $(".hitbox-portfolio-4").position().left + $(".hitbox-portfolio-4").width();

        //collision check with Door hitbox
        if(!((( meTop-movement > hitDoorBot) || ( meBot < hitDoorTop)) || ((meLeft-movement > hitDoorRight) || (meRight+movement < hitDoorLeft)))){
            if(!isOpenBack){
                $(".door-msg").css("animation", "fadein .5s");
                $(".door-msg").css("display", "block");
                $(".image-map").addClass("dark");
                isOpenBack = 1;
                if(e.which == 32){
                    window.location.replace("home.html");
                }
            }
        }else{
            isOpenBack = 0;
            $(".door-msg").css("display", "none");
        }

        //collision check with Port1 hitbox
        if(!((( meTop+movement > hitPort1Bot) || ( meBot+movement < hitPort1Top)) || ((meLeft+movement > hitPort1Right) || (meRight-movement < hitPort1Left)))){
            if(!isOpen1){
                $("#portfolio-msg-1").css("animation", "fadein .5s");
                $("#portfolio-msg-1").css("display", "block");
                $(".image-map").addClass("dark");
                isOpen1 = 1;
            }
        }else{
            isOpen1 = 0;
        }

        //collision check with Port2 hitbox
        if(!((( meTop+movement > hitPort2Bot) || ( meBot+movement < hitPort2Top)) || ((meLeft+movement > hitPort2Right) || (meRight-movement < hitPort2Left)))){
            if(!isOpen2){
                $("#portfolio-msg-2").css("animation", "fadein .5s");
                $("#portfolio-msg-2").css("display", "block");
                $(".image-map").addClass("dark");
                isOpen2 = 1;
            }
        }else{
            isOpen2 = 0;
        }

        //collision check with Port3 hitbox
        if(!((( meTop+movement > hitPort3Bot) || ( meBot+movement < hitPort3Top)) || ((meLeft+movement > hitPort3Right) || (meRight-movement < hitPort3Left)))){
            if(!isOpen3){
                $("#portfolio-msg-3").css("animation", "fadein .5s");
                $("#portfolio-msg-3").css("display", "block");
                $(".image-map").addClass("dark");
                isOpen3 = 1;
            }
        }else{
            isOpen3 = 0;
        }

        //collision check with Port4 hitbox
        if(!((( meTop+movement > hitPort4Bot) || ( meBot+movement < hitPort4Top)) || ((meLeft+movement > hitPort4Right) || (meRight-movement < hitPort4Left)))){
            if(!isOpen4){
                $("#portfolio-msg-4").css("animation", "fadein .5s");
                $("#portfolio-msg-4").css("display", "block");
                $(".image-map").addClass("dark");
                isOpen4 = 1;
            }
        }else{
            isOpen4 = 0;
        }

        $("#btn-close-1").on("click", function(){
            if(isOpen1){
                $(".image-map").removeClass("dark");
                $("#portfolio-msg-1").css("animation", "fadeout .5s");
                setTimeout(function(){
                    $("#portfolio-msg-1").css("display", "none");
                },500); 
            }
        });
        $("#btn-close-2").on("click", function(){
            if(isOpen2){
                $(".image-map").removeClass("dark");
                $("#portfolio-msg-2").css("animation", "fadeout .5s");
                setTimeout(function(){
                    $("#portfolio-msg-2").css("display", "none");
                },500); 
            }
        });
        $("#btn-close-3").on("click", function(){
            if(isOpen3){
                $(".image-map").removeClass("dark");
                $("#portfolio-msg-3").css("animation", "fadeout .5s");
                setTimeout(function(){
                    $("#portfolio-msg-3").css("display", "none");
                },500); 
            }
        });
        $("#btn-close-4").on("click", function(){
            if(isOpen4){
                $(".image-map").removeClass("dark");
                $("#portfolio-msg-4").css("animation", "fadeout .5s");
                setTimeout(function(){
                    $("#portfolio-msg-4").css("display", "none");
                },500); 
            }
        });
        $(".btn-close-back").on("click", function(){
            console.log(isOpenBack);
            if(isOpenBack){
                $(".image-map").removeClass("dark");
                $(".door-msg").css("animation", "fadeout .5s");
                setTimeout(function(){
                    $(".door-msg").css("display", "none");
                },500); 
            }
        });

        if(!isOpen1){
            $("#portfolio-msg-1").css("animation", "fadeout .5s");
            setTimeout(function(){
                $("#portfolio-msg-1").css("display", "none");
            },500); 
        }else if(!isOpen2){
            $("#portfolio-msg-2").css("animation", "fadeout .5s");
            setTimeout(function(){
                $("#portfolio-msg-2").css("display", "none");
            },500); 
        }else if(!isOpen3){
            $("#portfolio-msg-3").css("animation", "fadeout .5s");
            setTimeout(function(){
                $("#portfolio-msg-3").css("display", "none");
            },500); 
        }else if(!isOpen4){
            $("#portfolio-msg-4").css("animation", "fadeout .5s");
            setTimeout(function(){
                $("#portfolio-msg-4").css("display", "none");
            },500); 
        }
    });

    $(document).on("keydown", function(e){
        // Hitboxes
        var meBot = (($(".me").position().top) + $(".me").height()+ $(".image-map").height());
        var meTop = ($(".me").position().top + $(".image-map").height());
        var meLeft = ($(".me").position().left);
        var meRight = $(".me").position().left + $('.me').width();
        var hitDoorTop = $(".hitbox-door").position().top;
        var hitDoorBot = ($(".hitbox-door").position().top + $(".hitbox-door").height());
        var hitDoorLeft = $(".hitbox-door").position().left;
        var hitDoorRight = $(".hitbox-door").position().left + $(".hitbox-door").width();

        if(!((( meTop-movement > hitDoorBot) || ( meBot < hitDoorTop)) || ((meLeft-movement > hitDoorRight) || (meRight+movement < hitDoorLeft)))){
            if(e.which == 32){
                window.location.replace("home.html");
            }
        }
    })
});