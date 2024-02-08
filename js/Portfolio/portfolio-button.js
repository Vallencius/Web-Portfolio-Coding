$(document).ready(function () {
    var touchstartID=-1;
    var isOpen1 = 0;
    var isOpen2 = 0;
    var isOpen3 = 0;
    var isOpen4 = 0;
    const movement = $(window).width()/40;

    $(document).on('touchstart',function (){   
        if (!$('.me').is(':animated'))  {   
            // Hitboxes
            var meBot = (($(".me").position().top) + $(".me").height()+ $(".image-map").height());
            var meTop = ($(".me").position().top + $(".image-map").height());
            var meLeft = ($(".me").position().left);
            var meRight = $(".me").position().left + $('.me').width();
            var hitAtasTop = $(".hitbox-atas").position().top;
            var hitAtasBot = ($(".hitbox-atas").position().top + $(".hitbox-atas").height());
            var hitAtasLeft = $(".hitbox-atas").position().left;
            var hitAtasRight = $(".hitbox-atas").position().left + $(".hitbox-atas").width();
            var hitKiriTop = $(".hitbox-kiri").position().top;
            var hitKiriBot = ($(".hitbox-kiri").position().top + $(".hitbox-kiri").height());
            var hitKiriLeft = $(".hitbox-kiri").position().left;
            var hitKiriRight = $(".hitbox-kiri").position().left + $(".hitbox-kiri").width();
            var hitKananTop = $(".hitbox-kanan").position().top;
            var hitKananBot = ($(".hitbox-kanan").position().top + $(".hitbox-kanan").height());
            var hitKananLeft = $(".hitbox-kanan").position().left;
            var hitKananRight = $(".hitbox-kanan").position().left + $(".hitbox-kanan").width();
            var hitFireTop = $(".hitbox-fire").position().top;
            var hitFireBot = ($(".hitbox-fire").position().top + $(".hitbox-fire").height());
            var hitFireLeft = $(".hitbox-fire").position().left;
            var hitFireRight = $(".hitbox-fire").position().left + $(".hitbox-fire").width();
            var hitBawahTop = $(".hitbox-bawah").position().top;
            var hitBawahBot = ($(".hitbox-bawah").position().top + $(".hitbox-bawah").height());
            var hitBawahLeft = $(".hitbox-bawah").position().left;
            var hitBawahRight = $(".hitbox-bawah").position().left + $(".hitbox-bawah").width();

            $(".left-button").on("touchstart", function(){ //left arrow key
                if(touchstartID==-1)
                    touchstartID = setInterval(whiletouchstart, 100 /*execute every 100ms*/);
                function whiletouchstart() {
                    meBot = (($(".me").position().top) + $(".me").height()+ $(".image-map").height());
                    meTop = ($(".me").position().top + $(".image-map").height());
                    meLeft = ($(".me").position().left);
                    meRight = $(".me").position().left + $('.me').width();
                    hitAtasTop = $(".hitbox-atas").position().top;
                    hitAtasBot = ($(".hitbox-atas").position().top + $(".hitbox-atas").height());
                    hitAtasLeft = $(".hitbox-atas").position().left;
                    hitAtasRight = $(".hitbox-atas").position().left + $(".hitbox-atas").width();
                    hitKiriTop = $(".hitbox-kiri").position().top;
                    hitKiriBot = ($(".hitbox-kiri").position().top + $(".hitbox-kiri").height());
                    hitKiriLeft = $(".hitbox-kiri").position().left;
                    hitKiriRight = $(".hitbox-kiri").position().left + $(".hitbox-kiri").width();
                    hitKananTop = $(".hitbox-kanan").position().top;
                    hitKananBot = ($(".hitbox-kanan").position().top + $(".hitbox-kanan").height());
                    hitKananLeft = $(".hitbox-kanan").position().left;
                    hitKananRight = $(".hitbox-kanan").position().left + $(".hitbox-kanan").width();
                    hitFireTop = $(".hitbox-fire").position().top;
                    hitFireBot = ($(".hitbox-fire").position().top + $(".hitbox-fire").height());
                    hitFireLeft = $(".hitbox-fire").position().left;
                    hitFireRight = $(".hitbox-fire").position().left + $(".hitbox-fire").width();
                    hitBawahTop = $(".hitbox-bawah").position().top;
                    hitBawahBot = ($(".hitbox-bawah").position().top + $(".hitbox-bawah").height());
                    hitBawahLeft = $(".hitbox-bawah").position().left;
                    hitBawahRight = $(".hitbox-bawah").position().left + $(".hitbox-bawah").width();

                    if(meLeft > 40 && //Checks wether .me is in left most screen
                        ((( meTop > hitKiriBot) || ( meBot < hitKiriTop)) || ((meLeft-movement > hitKiriRight) || (meRight < hitKiriLeft))) && //collision check with kiri hitbox
                        ((( meTop > hitKananBot) || ( meBot < hitKananTop)) || ((meLeft-movement > hitKananRight) || (meRight < hitKananLeft))) && //collision check with Kanan hitbox
                        ((( meTop > hitFireBot) || ( meBot < hitFireTop)) || ((meLeft-movement > hitFireRight) || (meRight < hitFireLeft))) && //collision check with Fire hitbox
                        ((( meTop > hitBawahBot) || ( meBot < hitBawahTop)) || ((meLeft-movement > hitBawahRight) || (meRight < hitBawahLeft))) //collision check with Bawah hitbox
                    ){ 
                        $('.sprite-left').css("opacity", 1);
                        $('.sprite-right').css("opacity", 0);
                        $('.sprite-up').css("opacity", 0);
                        $('.sprite-down').css("opacity", 0);
                        $('.me').stop().animate({
                            left: '-=' + movement
                        }, 100, 'linear'); 
                    }
                }
            });
            $(".up-button").on("touchstart", function(){ //up arrow key
                if(touchstartID==-1)
                    touchstartID = setInterval(whiletouchstart, 100 /*execute every 100ms*/);
                function whiletouchstart() {
                    meBot = (($(".me").position().top) + $(".me").height()+ $(".image-map").height());
                    meTop = ($(".me").position().top + $(".image-map").height());
                    meLeft = ($(".me").position().left);
                    meRight = $(".me").position().left + $('.me').width();
                    hitAtasTop = $(".hitbox-atas").position().top;
                    hitAtasBot = ($(".hitbox-atas").position().top + $(".hitbox-atas").height());
                    hitAtasLeft = $(".hitbox-atas").position().left;
                    hitAtasRight = $(".hitbox-atas").position().left + $(".hitbox-atas").width();
                    hitKiriTop = $(".hitbox-kiri").position().top;
                    hitKiriBot = ($(".hitbox-kiri").position().top + $(".hitbox-kiri").height());
                    hitKiriLeft = $(".hitbox-kiri").position().left;
                    hitKiriRight = $(".hitbox-kiri").position().left + $(".hitbox-kiri").width();
                    hitKananTop = $(".hitbox-kanan").position().top;
                    hitKananBot = ($(".hitbox-kanan").position().top + $(".hitbox-kanan").height());
                    hitKananLeft = $(".hitbox-kanan").position().left;
                    hitKananRight = $(".hitbox-kanan").position().left + $(".hitbox-kanan").width();
                    hitFireTop = $(".hitbox-fire").position().top;
                    hitFireBot = ($(".hitbox-fire").position().top + $(".hitbox-fire").height());
                    hitFireLeft = $(".hitbox-fire").position().left;
                    hitFireRight = $(".hitbox-fire").position().left + $(".hitbox-fire").width();
                    hitBawahTop = $(".hitbox-bawah").position().top;
                    hitBawahBot = ($(".hitbox-bawah").position().top + $(".hitbox-bawah").height());
                    hitBawahLeft = $(".hitbox-bawah").position().left;
                    hitBawahRight = $(".hitbox-bawah").position().left + $(".hitbox-bawah").width();

                    if((Math.abs($(".me").position().top)<$(".image-map").height()) && //Checks wether .me is in top most screen
                        ((( meBot-21 > hitAtasBot)) || ((meLeft > hitAtasRight) || (meRight < hitAtasLeft))) && //collision check with Atas hitbox
                        ((( meTop-movement > hitKiriBot) || ( meBot < hitKiriTop)) || ((meLeft > hitKiriRight) || (meRight < hitKiriLeft))) && //collision check with Kiri hitbox
                        ((( meTop-movement > hitKananBot) || ( meBot < hitKananTop)) || ((meLeft > hitKananRight) || (meRight < hitKananLeft))) && //collision check with Kanan hitbox
                        ((( meTop-movement > hitFireBot) || ( meBot < hitFireTop)) || ((meLeft > hitFireRight) || (meRight < hitFireLeft))) && //collision check with Fire hitbox
                        ((( meTop-movement > hitBawahBot) || ( meBot < hitBawahTop)) || ((meLeft > hitBawahRight) || (meRight < hitBawahLeft))) //collision check with Bawah hitbox
                    ){
                        $('.sprite-left').css("opacity", 0);
                        $('.sprite-right').css("opacity", 0);
                        $('.sprite-up').css("opacity", 1);
                        $('.sprite-down').css("opacity", 0);
                        $('.me').stop().animate({
                            top: '-=' + movement
                        }, 100, 'linear'); 
                    }
                }
            });
            $(".right-button").on("touchstart", function(){ //right arrow key
                if(touchstartID==-1)
                    touchstartID = setInterval(whiletouchstart, 100 /*execute every 100ms*/);
                function whiletouchstart() {
                    meBot = (($(".me").position().top) + $(".me").height()+ $(".image-map").height());
                    meTop = ($(".me").position().top + $(".image-map").height());
                    meLeft = ($(".me").position().left);
                    meRight = $(".me").position().left + $('.me').width();
                    hitAtasTop = $(".hitbox-atas").position().top;
                    hitAtasBot = ($(".hitbox-atas").position().top + $(".hitbox-atas").height());
                    hitAtasLeft = $(".hitbox-atas").position().left;
                    hitAtasRight = $(".hitbox-atas").position().left + $(".hitbox-atas").width();
                    hitKiriTop = $(".hitbox-kiri").position().top;
                    hitKiriBot = ($(".hitbox-kiri").position().top + $(".hitbox-kiri").height());
                    hitKiriLeft = $(".hitbox-kiri").position().left;
                    hitKiriRight = $(".hitbox-kiri").position().left + $(".hitbox-kiri").width();
                    hitKananTop = $(".hitbox-kanan").position().top;
                    hitKananBot = ($(".hitbox-kanan").position().top + $(".hitbox-kanan").height());
                    hitKananLeft = $(".hitbox-kanan").position().left;
                    hitKananRight = $(".hitbox-kanan").position().left + $(".hitbox-kanan").width();
                    hitFireTop = $(".hitbox-fire").position().top;
                    hitFireBot = ($(".hitbox-fire").position().top + $(".hitbox-fire").height());
                    hitFireLeft = $(".hitbox-fire").position().left;
                    hitFireRight = $(".hitbox-fire").position().left + $(".hitbox-fire").width();
                    hitBawahTop = $(".hitbox-bawah").position().top;
                    hitBawahBot = ($(".hitbox-bawah").position().top + $(".hitbox-bawah").height());
                    hitBawahLeft = $(".hitbox-bawah").position().left;
                    hitBawahRight = $(".hitbox-bawah").position().left + $(".hitbox-bawah").width();

                    if(meRight+40 < $(".image-map").width() && //Checks wether .me is in right most screen
                        ((( meTop > hitKiriBot) || ( meBot < hitKiriTop)) || ((meLeft > hitKiriRight) || (meRight+movement < hitKiriLeft))) && //collision check with Kiri hitbox
                        ((( meTop > hitKananBot) || ( meBot < hitKananTop)) || ((meLeft > hitKananRight) || (meRight+movement < hitKananLeft))) && //collision check with Kanan hitbox
                        ((( meTop > hitFireBot) || ( meBot < hitFireTop)) || ((meLeft > hitFireRight) || (meRight+movement < hitFireLeft))) && //collision check with Fire hitbox
                        ((( meTop > hitBawahBot) || ( meBot < hitBawahTop)) || ((meLeft > hitBawahRight) || (meRight+movement < hitBawahLeft))) //collision check with Bawah hitbox
                    ){
                        $('.sprite-left').css("opacity", 0);
                        $('.sprite-right').css("opacity", 1);
                        $('.sprite-up').css("opacity", 0);
                        $('.sprite-down').css("opacity", 0);
                        $('.me').stop().animate({
                            left: '+=' + movement
                        }, 100, 'linear'); 
                    }
                }
            });
            $(".down-button").on("touchstart", function(){ //bottom arrow key
                if(touchstartID==-1)
                    touchstartID = setInterval(whiletouchstart, 100 /*execute every 100ms*/);
                function whiletouchstart() {
                    meBot = (($(".me").position().top) + $(".me").height()+ $(".image-map").height());
                    meTop = ($(".me").position().top + $(".image-map").height());
                    meLeft = ($(".me").position().left);
                    meRight = $(".me").position().left + $('.me').width();
                    hitAtasTop = $(".hitbox-atas").position().top;
                    hitAtasBot = ($(".hitbox-atas").position().top + $(".hitbox-atas").height());
                    hitAtasLeft = $(".hitbox-atas").position().left;
                    hitAtasRight = $(".hitbox-atas").position().left + $(".hitbox-atas").width();
                    hitKiriTop = $(".hitbox-kiri").position().top;
                    hitKiriBot = ($(".hitbox-kiri").position().top + $(".hitbox-kiri").height());
                    hitKiriLeft = $(".hitbox-kiri").position().left;
                    hitKiriRight = $(".hitbox-kiri").position().left + $(".hitbox-kiri").width();
                    hitKananTop = $(".hitbox-kanan").position().top;
                    hitKananBot = ($(".hitbox-kanan").position().top + $(".hitbox-kanan").height());
                    hitKananLeft = $(".hitbox-kanan").position().left;
                    hitKananRight = $(".hitbox-kanan").position().left + $(".hitbox-kanan").width();
                    hitFireTop = $(".hitbox-fire").position().top;
                    hitFireBot = ($(".hitbox-fire").position().top + $(".hitbox-fire").height());
                    hitFireLeft = $(".hitbox-fire").position().left;
                    hitFireRight = $(".hitbox-fire").position().left + $(".hitbox-fire").width();
                    hitBawahTop = $(".hitbox-bawah").position().top;
                    hitBawahBot = ($(".hitbox-bawah").position().top + $(".hitbox-bawah").height());
                    hitBawahLeft = $(".hitbox-bawah").position().left;
                    hitBawahRight = $(".hitbox-bawah").position().left + $(".hitbox-bawah").width();

                    if((($(".me").position().top+$('.me').height()+0)<0) && //Checks wether .me is in bottom most screen
                        ((( meTop > hitKiriBot) || ( meBot+movement < hitKiriTop)) || ((meLeft > hitKiriRight) || (meRight < hitKiriLeft))) && //collision check with Kiri hitbox
                        ((( meTop > hitKananBot) || ( meBot+movement < hitKananTop)) || ((meLeft > hitKananRight) || (meRight < hitKananLeft))) && //collision check with Kanan hitbox
                        ((( meTop > hitFireBot) || ( meBot+movement < hitFireTop)) || ((meLeft > hitFireRight) || (meRight < hitFireLeft))) && //collision check with Fire hitbox
                        ((( meTop > hitBawahBot) || ( meBot+movement < hitBawahTop)) || ((meLeft > hitBawahRight) || (meRight < hitBawahLeft))) //collision check with Bawah hitbox
                    ){ 
                        $('.sprite-left').css("opacity", 0);
                        $('.sprite-right').css("opacity", 0);
                        $('.sprite-up').css("opacity", 0);
                        $('.sprite-down').css("opacity", 1);
                        $('.me').stop().animate({
                            top: '+=' + movement
                        }, 100, 'linear');
                    }
                }
            });
        }
    });
    $(document).on("touchend", function(){
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
            $(".door-msg").css("display", "block");
            $(".image-map").addClass("dark");
            $(".act-button").on("click", function(){
                if(!((( meTop-movement > hitDoorBot) || ( meBot < hitDoorTop)) || ((meLeft-movement > hitDoorRight) || (meRight+movement < hitDoorLeft)))){
                    window.location.replace("home.html");
                }
            });
        }else{
            $(".door-msg").css("display", "none");
        }

        //collision check with Port1 hitbox
        if(!((( meTop+21 > hitPort1Bot) || ( meBot+movement < hitPort1Top)) || ((meLeft+movement > hitPort1Right) || (meRight-movement < hitPort1Left)))){
            if(!isOpen1){
                $("#portfolio-msg-1").css("display", "block");
                $(".image-map").addClass("dark");
                isOpen1 = 1;
            }
        }else{
            isOpen1 = 0;
        }

        //collision check with Port2 hitbox
        if(!((( meTop+21 > hitPort2Bot) || ( meBot+movement < hitPort2Top)) || ((meLeft+movement > hitPort2Right) || (meRight-movement < hitPort2Left)))){
            if(!isOpen2){
                $("#portfolio-msg-2").css("display", "block");
                $(".image-map").addClass("dark");
                isOpen2 = 1;
            }
        }else{
            isOpen2 = 0;
        }

        //collision check with Port3 hitbox
        if(!((( meTop+21 > hitPort3Bot) || ( meBot+movement < hitPort3Top)) || ((meLeft+movement > hitPort3Right) || (meRight-movement < hitPort3Left)))){
            if(!isOpen3){
                $("#portfolio-msg-3").css("display", "block");
                $(".image-map").addClass("dark");
                isOpen3 = 1;
            }
        }else{
            isOpen3 = 0;
        }

        //collision check with Port4 hitbox
        if(!((( meTop+21 > hitPort4Bot) || ( meBot+movement < hitPort4Top)) || ((meLeft+movement > hitPort4Right) || (meRight-movement < hitPort4Left)))){
            if(!isOpen4){
                $("#portfolio-msg-4").css("display", "block");
                $(".image-map").addClass("dark");
                isOpen4 = 1;
            }
        }else{
            isOpen4 = 0;
        }

        $("#btn-close-1").on("touchstart", function(){
            if(isOpen1){
                $("#portfolio-msg-1").css("display", "none");
                $(".image-map").removeClass("dark");
            }
        });
        $("#btn-close-2").on("touchstart", function(){
            if(isOpen2){
                $("#portfolio-msg-2").css("display", "none");
                $(".image-map").removeClass("dark");
            }
        });
        $("#btn-close-3").on("touchstart", function(){
            if(isOpen3){
                $("#portfolio-msg-3").css("display", "none");
                $(".image-map").removeClass("dark");
            }
        });
        $("#btn-close-4").on("touchstart", function(){
            if(isOpen4){
                $("#portfolio-msg-4").css("display", "none");
                $(".image-map").removeClass("dark");
            }
        });

        if(touchstartID!=-1) {  //Only stop if exists
            clearInterval(touchstartID);
            touchstartID=-1;
        }
    })
});