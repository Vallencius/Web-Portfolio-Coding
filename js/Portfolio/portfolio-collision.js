$(document).ready(function () {
        
    var isOpen1 = 0;
    var isOpen2 = 0;
    var isOpen3 = 0;
    var isOpen4 = 0;
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
        if(!((( meTop-20 > hitDoorBot) || ( meBot < hitDoorTop)) || ((meLeft-20 > hitDoorRight) || (meRight+20 < hitDoorLeft)))){
            $(".door-msg").css("display", "block");
            $(".image-map").addClass("dark");
            if(e.which == 32){
                window.location.replace("home.html");
            }
        }else{
            $(".door-msg").css("display", "none");
        }

        //collision check with Port1 hitbox
        if(!((( meTop+20 > hitPort1Bot) || ( meBot+20 < hitPort1Top)) || ((meLeft+20 > hitPort1Right) || (meRight-20 < hitPort1Left)))){
            if(!isOpen1){
                $(".portfolio-msg-1").css("display", "block");
                $(".image-map").addClass("dark");
                isOpen1 = 1;
            }
        }else{
            isOpen1 = 0;
        }

        //collision check with Port2 hitbox
        if(!((( meTop+20 > hitPort2Bot) || ( meBot+20 < hitPort2Top)) || ((meLeft+20 > hitPort2Right) || (meRight-20 < hitPort2Left)))){
            if(!isOpen2){
                $(".portfolio-msg-2").css("display", "block");
                $(".image-map").addClass("dark");
                isOpen2 = 1;
            }
        }else{
            isOpen2 = 0;
        }

        //collision check with Port3 hitbox
        if(!((( meTop+20 > hitPort3Bot) || ( meBot+20 < hitPort3Top)) || ((meLeft+20 > hitPort3Right) || (meRight-20 < hitPort3Left)))){
            if(!isOpen3){
                $(".portfolio-msg-3").css("display", "block");
                $(".image-map").addClass("dark");
                isOpen3 = 1;
            }
        }else{
            isOpen3 = 0;
        }

        //collision check with Port4 hitbox
        if(!((( meTop+20 > hitPort4Bot) || ( meBot+20 < hitPort4Top)) || ((meLeft+20 > hitPort4Right) || (meRight-20 < hitPort4Left)))){
            if(!isOpen4){
                $(".portfolio-msg-4").css("display", "block");
                $(".image-map").addClass("dark");
                isOpen4 = 1;
            }
        }else{
            isOpen4 = 0;
        }

        $("#btn-close-1").on("click", function(){
            if(isOpen1){
                $(".portfolio-msg-1").css("display", "none");
                $(".image-map").removeClass("dark");
            }
        });
        $("#btn-close-2").on("click", function(){
            if(isOpen2){
                $(".portfolio-msg-1").css("display", "none");
                $(".image-map").removeClass("dark");
            }
        });
        $("#btn-close-3").on("click", function(){
            if(isOpen3){
                $(".portfolio-msg-1").css("display", "none");
                $(".image-map").removeClass("dark");
            }
        });
        $("#btn-close-4").on("click", function(){
            if(isOpen4){
                $(".portfolio-msg-1").css("display", "none");
                $(".image-map").removeClass("dark");
            }
        });

    });
    $(document).on('keydown',function (e){
    //collision check with blue hitbox
        $(".portfolio-msg").css("display", "none");
        $(".door-msg").css("display", "none");
        $(".image-map").removeClass("dark");
    });
});