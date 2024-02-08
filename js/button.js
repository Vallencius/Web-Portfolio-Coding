$(document).ready(function(){
    var touchstartID=-1;
    const movement = $(window).width()/40;

    $(".help").on("click", function(){
        $(".modal-awal").css("animation", "fadein .5s");
        $(".modal-awal").css("display","block");
        $(".home-display").addClass("dark");
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

    $(document).on('touchstart',function (){   
        if (!$('.me').is(':animated'))  {   
            // Hitboxes
            var meBot = (($(".me").position().top) + $(".me").height()+ $(".image-map").height());
            var meTop = ($(".me").position().top + $(".image-map").height());
            var meLeft = ($(".me").position().left);
            var meRight = $(".me").position().left + $('.me').width();
            var hitBlueTop = $(".hitbox-blue").position().top;
            var hitBlueBot = ($(".hitbox-blue").position().top + $(".hitbox-blue").height());
            var hitBlueLeft = $(".hitbox-blue").position().left;
            var hitBlueRight = $(".hitbox-blue").position().left + $(".hitbox-blue").width();
            var hitGreenTop = $(".hitbox-green").position().top;
            var hitGreenBot = ($(".hitbox-green").position().top + $(".hitbox-green").height());
            var hitGreenLeft = $(".hitbox-green").position().left;
            var hitGreenRight = $(".hitbox-green").position().left + $(".hitbox-green").width();
            var hitRedTop = $(".hitbox-red").position().top;
            var hitRedBot = ($(".hitbox-red").position().top + $(".hitbox-red").height());
            var hitRedLeft = $(".hitbox-red").position().left;
            var hitRedRight = $(".hitbox-red").position().left + $(".hitbox-red").width();
            var hitOrangeTop = $(".hitbox-orange").position().top;
            var hitOrangeBot = ($(".hitbox-orange").position().top + $(".hitbox-orange").height());
            var hitOrangeLeft = $(".hitbox-orange").position().left;
            var hitOrangeRight = $(".hitbox-orange").position().left + $(".hitbox-orange").width();
            var hitPurpleTop = $(".hitbox-purple").position().top;
            var hitPurpleBot = ($(".hitbox-purple").position().top + $(".hitbox-purple").height());
            var hitPurpleLeft = $(".hitbox-purple").position().left;
            var hitPurpleRight = $(".hitbox-purple").position().left + $(".hitbox-purple").width();
            var hitHouseTop = $(".hitbox-house").position().top;
            var hitHouseBot = ($(".hitbox-house").position().top + $(".hitbox-house").height());
            var hitHouseLeft = $(".hitbox-house").position().left;
            var hitHouseRight = $(".hitbox-house").position().left + $(".hitbox-house").width();

            var hitPantaiKiriTop = $(".hitbox-pantai-kiri").position().top;
            var hitPantaiKiriBot = ($(".hitbox-pantai-kiri").position().top + $(".hitbox-pantai-kiri").height());
            var hitPantaiKiriLeft = $(".hitbox-pantai-kiri").position().left;
            var hitPantaiKiriRight = $(".hitbox-pantai-kiri").position().left + $(".hitbox-pantai-kiri").width();
            var hitPantaiKananTop = $(".hitbox-pantai-kanan").position().top;
            var hitPantaiKananBot = ($(".hitbox-pantai-kanan").position().top + $(".hitbox-pantai-kanan").height());
            var hitPantaiKananLeft = $(".hitbox-pantai-kanan").position().left;
            var hitPantaiKananRight = $(".hitbox-pantai-kanan").position().left + $(".hitbox-pantai-kanan").width();
            var hitMenuTop = $(".hitbox-pantai-menu").position().top;
            var hitMenuBot = ($(".hitbox-pantai-menu").position().top + $(".hitbox-pantai-menu").height());
            var hitMenuLeft = $(".hitbox-pantai-menu").position().left;
            var hitMenuRight = $(".hitbox-pantai-menu").position().left + $(".hitbox-pantai-menu").width();

            $(".left-button").on("touchstart", function(){ //left arrow key
                if(touchstartID==-1)
                    touchstartID = setInterval(whiletouchstart, 100 /*execute every 100ms*/);
                function whiletouchstart() {
                    meBot = (($(".me").position().top) + $(".me").height()+ $(".image-map").height());
                    meTop = ($(".me").position().top + $(".image-map").height());
                    meLeft = ($(".me").position().left);
                    meRight = $(".me").position().left + $('.me').width();
                    hitBlueTop = $(".hitbox-blue").position().top;
                    hitBlueBot = ($(".hitbox-blue").position().top + $(".hitbox-blue").height());
                    hitBlueLeft = $(".hitbox-blue").position().left;
                    hitBlueRight = $(".hitbox-blue").position().left + $(".hitbox-blue").width();
                    hitGreenTop = $(".hitbox-green").position().top;
                    hitGreenBot = ($(".hitbox-green").position().top + $(".hitbox-green").height());
                    hitGreenLeft = $(".hitbox-green").position().left;
                    hitGreenRight = $(".hitbox-green").position().left + $(".hitbox-green").width();
                    hitRedTop = $(".hitbox-red").position().top;
                    hitRedBot = ($(".hitbox-red").position().top + $(".hitbox-red").height());
                    hitRedLeft = $(".hitbox-red").position().left;
                    hitRedRight = $(".hitbox-red").position().left + $(".hitbox-red").width();
                    hitOrangeTop = $(".hitbox-orange").position().top;
                    hitOrangeBot = ($(".hitbox-orange").position().top + $(".hitbox-orange").height());
                    hitOrangeLeft = $(".hitbox-orange").position().left;
                    hitOrangeRight = $(".hitbox-orange").position().left + $(".hitbox-orange").width();
                    hitPurpleTop = $(".hitbox-purple").position().top;
                    hitPurpleBot = ($(".hitbox-purple").position().top + $(".hitbox-purple").height());
                    hitPurpleLeft = $(".hitbox-purple").position().left;
                    hitPurpleRight = $(".hitbox-purple").position().left + $(".hitbox-purple").width();
                    hitHouseTop = $(".hitbox-house").position().top;
                    hitHouseBot = ($(".hitbox-house").position().top + $(".hitbox-house").height());
                    hitHouseLeft = $(".hitbox-house").position().left;
                    hitHouseRight = $(".hitbox-house").position().left + $(".hitbox-house").width();
        
                    hitPantaiKiriTop = $(".hitbox-pantai-kiri").position().top;
                    hitPantaiKiriBot = ($(".hitbox-pantai-kiri").position().top + $(".hitbox-pantai-kiri").height());
                    hitPantaiKiriLeft = $(".hitbox-pantai-kiri").position().left;
                    hitPantaiKiriRight = $(".hitbox-pantai-kiri").position().left + $(".hitbox-pantai-kiri").width();
                    hitPantaiKananTop = $(".hitbox-pantai-kanan").position().top;
                    hitPantaiKananBot = ($(".hitbox-pantai-kanan").position().top + $(".hitbox-pantai-kanan").height());
                    hitPantaiKananLeft = $(".hitbox-pantai-kanan").position().left;
                    hitPantaiKananRight = $(".hitbox-pantai-kanan").position().left + $(".hitbox-pantai-kanan").width();
                    hitMenuTop = $(".hitbox-pantai-menu").position().top;
                    hitMenuBot = ($(".hitbox-pantai-menu").position().top + $(".hitbox-pantai-menu").height());
                    hitMenuLeft = $(".hitbox-pantai-menu").position().left;
                    hitMenuRight = $(".hitbox-pantai-menu").position().left + $(".hitbox-pantai-menu").width();
                    if(meLeft > 0 && //Checks wether .me is in left most screen
                        ((( meTop > hitBlueBot) || ( meBot < hitBlueTop)) || ((meLeft-movement > hitBlueRight) || (meRight < hitBlueLeft))) && //collision check with blue hitbox
                        ((( meTop > hitGreenBot) || ( meBot < hitGreenTop)) || ((meLeft-movement > hitGreenRight) || (meRight < hitGreenLeft))) && //collision check with green hitbox
                        ((( meTop > hitRedBot) || ( meBot < hitRedTop)) || ((meLeft-movement > hitRedRight) || (meRight < hitRedLeft))) && //collision check with red hitbox
                        ((( meTop > hitOrangeBot) || ( meBot < hitOrangeTop)) || ((meLeft-movement > hitOrangeRight) || (meRight < hitOrangeLeft))) && //collision check with orange hitbox
                        ((( meTop > hitPurpleBot) || ( meBot < hitPurpleTop)) || ((meLeft-movement > hitPurpleRight) || (meRight < hitPurpleLeft))) && //collision check with purple hitbox
                        ((( meTop > hitHouseBot) || ( meBot < hitHouseTop)) || ((meLeft-movement > hitHouseRight) || (meRight < hitHouseLeft))) && //collision check with house hitbox
                        ((( meTop > hitPantaiKiriBot) || ( meBot < hitPantaiKiriTop)) || ((meLeft-movement > hitPantaiKiriRight) || (meRight < hitPantaiKiriLeft))) && //collision check with pantai Kiri hitbox
                        ((( meTop > hitPantaiKananBot) || ( meBot < hitPantaiKananTop)) || ((meLeft-movement > hitPantaiKananRight) || (meRight < hitPantaiKananLeft))) //collision check with pantai Kanan hitbox
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
                    hitBlueTop = $(".hitbox-blue").position().top;
                    hitBlueBot = ($(".hitbox-blue").position().top + $(".hitbox-blue").height());
                    hitBlueLeft = $(".hitbox-blue").position().left;
                    hitBlueRight = $(".hitbox-blue").position().left + $(".hitbox-blue").width();
                    hitGreenTop = $(".hitbox-green").position().top;
                    hitGreenBot = ($(".hitbox-green").position().top + $(".hitbox-green").height());
                    hitGreenLeft = $(".hitbox-green").position().left;
                    hitGreenRight = $(".hitbox-green").position().left + $(".hitbox-green").width();
                    hitRedTop = $(".hitbox-red").position().top;
                    hitRedBot = ($(".hitbox-red").position().top + $(".hitbox-red").height());
                    hitRedLeft = $(".hitbox-red").position().left;
                    hitRedRight = $(".hitbox-red").position().left + $(".hitbox-red").width();
                    hitOrangeTop = $(".hitbox-orange").position().top;
                    hitOrangeBot = ($(".hitbox-orange").position().top + $(".hitbox-orange").height());
                    hitOrangeLeft = $(".hitbox-orange").position().left;
                    hitOrangeRight = $(".hitbox-orange").position().left + $(".hitbox-orange").width();
                    hitPurpleTop = $(".hitbox-purple").position().top;
                    hitPurpleBot = ($(".hitbox-purple").position().top + $(".hitbox-purple").height());
                    hitPurpleLeft = $(".hitbox-purple").position().left;
                    hitPurpleRight = $(".hitbox-purple").position().left + $(".hitbox-purple").width();
                    hitHouseTop = $(".hitbox-house").position().top;
                    hitHouseBot = ($(".hitbox-house").position().top + $(".hitbox-house").height());
                    hitHouseLeft = $(".hitbox-house").position().left;
                    hitHouseRight = $(".hitbox-house").position().left + $(".hitbox-house").width();
        
                    hitPantaiKiriTop = $(".hitbox-pantai-kiri").position().top;
                    hitPantaiKiriBot = ($(".hitbox-pantai-kiri").position().top + $(".hitbox-pantai-kiri").height());
                    hitPantaiKiriLeft = $(".hitbox-pantai-kiri").position().left;
                    hitPantaiKiriRight = $(".hitbox-pantai-kiri").position().left + $(".hitbox-pantai-kiri").width();
                    hitPantaiKananTop = $(".hitbox-pantai-kanan").position().top;
                    hitPantaiKananBot = ($(".hitbox-pantai-kanan").position().top + $(".hitbox-pantai-kanan").height());
                    hitPantaiKananLeft = $(".hitbox-pantai-kanan").position().left;
                    hitPantaiKananRight = $(".hitbox-pantai-kanan").position().left + $(".hitbox-pantai-kanan").width();
                    hitMenuTop = $(".hitbox-pantai-menu").position().top;
                    hitMenuBot = ($(".hitbox-pantai-menu").position().top + $(".hitbox-pantai-menu").height());
                    hitMenuLeft = $(".hitbox-pantai-menu").position().left;
                    hitMenuRight = $(".hitbox-pantai-menu").position().left + $(".hitbox-pantai-menu").width();

                    if((Math.abs($(".me").position().top)<$(".image-map").height()) && //Checks wether .me is in top most screen
                        ((( meTop-movement > hitBlueBot) || ( meBot < hitBlueTop)) || ((meLeft > hitBlueRight) || (meRight < hitBlueLeft))) && //collision check with blue hitbox
                        ((( meTop-movement > hitGreenBot) || ( meBot < hitGreenTop)) || ((meLeft > hitGreenRight) || (meRight < hitGreenLeft))) && //collision check with green hitbox
                        ((( meTop-movement > hitRedBot) || ( meBot < hitRedTop)) || ((meLeft > hitRedRight) || (meRight < hitRedLeft))) && //collision check with ref hitbox
                        ((( meTop-movement > hitOrangeBot) || ( meBot < hitOrangeTop)) || ((meLeft > hitOrangeRight) || (meRight < hitOrangeLeft))) &&//collision check with orange hitbox
                        ((( meTop-movement > hitPurpleBot) || ( meBot < hitPurpleTop)) || ((meLeft > hitPurpleRight) || (meRight < hitPurpleLeft))) && //collision check with purple hitbox
                        ((( meTop-movement > hitHouseBot) || ( meBot < hitHouseTop)) || ((meLeft > hitHouseRight) || (meRight < hitHouseLeft))) && //collision check with house hitbox
                        ((( meTop-movement > hitPantaiKiriBot) || ( meBot < hitPantaiKiriTop)) || ((meLeft > hitPantaiKiriRight) || (meRight < hitPantaiKiriLeft))) && //collision check with pantai kiri hitbox
                        ((( meTop-movement > hitPantaiKananBot) || ( meBot < hitPantaiKananTop)) || ((meLeft > hitPantaiKananRight) || (meRight < hitPantaiKananLeft))) //collision check with pantai kanan hitbox
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
            $(".right-button").on("touchstart", function(){//right arrow key
                if(touchstartID==-1)
                    touchstartID = setInterval(whiletouchstart, 100 /*execute every 100ms*/);
                
                function whiletouchstart() {
                    meBot = (($(".me").position().top) + $(".me").height()+ $(".image-map").height());
                    meTop = ($(".me").position().top + $(".image-map").height());
                    meLeft = ($(".me").position().left);
                    meRight = $(".me").position().left + $('.me').width();
                    hitBlueTop = $(".hitbox-blue").position().top;
                    hitBlueBot = ($(".hitbox-blue").position().top + $(".hitbox-blue").height());
                    hitBlueLeft = $(".hitbox-blue").position().left;
                    hitBlueRight = $(".hitbox-blue").position().left + $(".hitbox-blue").width();
                    hitGreenTop = $(".hitbox-green").position().top;
                    hitGreenBot = ($(".hitbox-green").position().top + $(".hitbox-green").height());
                    hitGreenLeft = $(".hitbox-green").position().left;
                    hitGreenRight = $(".hitbox-green").position().left + $(".hitbox-green").width();
                    hitRedTop = $(".hitbox-red").position().top;
                    hitRedBot = ($(".hitbox-red").position().top + $(".hitbox-red").height());
                    hitRedLeft = $(".hitbox-red").position().left;
                    hitRedRight = $(".hitbox-red").position().left + $(".hitbox-red").width();
                    hitOrangeTop = $(".hitbox-orange").position().top;
                    hitOrangeBot = ($(".hitbox-orange").position().top + $(".hitbox-orange").height());
                    hitOrangeLeft = $(".hitbox-orange").position().left;
                    hitOrangeRight = $(".hitbox-orange").position().left + $(".hitbox-orange").width();
                    hitPurpleTop = $(".hitbox-purple").position().top;
                    hitPurpleBot = ($(".hitbox-purple").position().top + $(".hitbox-purple").height());
                    hitPurpleLeft = $(".hitbox-purple").position().left;
                    hitPurpleRight = $(".hitbox-purple").position().left + $(".hitbox-purple").width();
                    hitHouseTop = $(".hitbox-house").position().top;
                    hitHouseBot = ($(".hitbox-house").position().top + $(".hitbox-house").height());
                    hitHouseLeft = $(".hitbox-house").position().left;
                    hitHouseRight = $(".hitbox-house").position().left + $(".hitbox-house").width();
        
                    hitPantaiKiriTop = $(".hitbox-pantai-kiri").position().top;
                    hitPantaiKiriBot = ($(".hitbox-pantai-kiri").position().top + $(".hitbox-pantai-kiri").height());
                    hitPantaiKiriLeft = $(".hitbox-pantai-kiri").position().left;
                    hitPantaiKiriRight = $(".hitbox-pantai-kiri").position().left + $(".hitbox-pantai-kiri").width();
                    hitPantaiKananTop = $(".hitbox-pantai-kanan").position().top;
                    hitPantaiKananBot = ($(".hitbox-pantai-kanan").position().top + $(".hitbox-pantai-kanan").height());
                    hitPantaiKananLeft = $(".hitbox-pantai-kanan").position().left;
                    hitPantaiKananRight = $(".hitbox-pantai-kanan").position().left + $(".hitbox-pantai-kanan").width();
                    hitMenuTop = $(".hitbox-pantai-menu").position().top;
                    hitMenuBot = ($(".hitbox-pantai-menu").position().top + $(".hitbox-pantai-menu").height());
                    hitMenuLeft = $(".hitbox-pantai-menu").position().left;
                    hitMenuRight = $(".hitbox-pantai-menu").position().left + $(".hitbox-pantai-menu").width();

                    if(meRight < $(".image-map").width() && //Checks wether .me is in right most screen
                        ((( meTop > hitBlueBot) || ( meBot < hitBlueTop)) || ((meLeft > hitBlueRight) || (meRight+movement < hitBlueLeft))) && //collision check with blue hitbox
                        ((( meTop > hitGreenBot) || ( meBot < hitGreenTop)) || ((meLeft > hitGreenRight) || (meRight+movement < hitGreenLeft))) && //collision check with green hitbox
                        ((( meTop > hitRedBot) || ( meBot < hitRedTop)) || ((meLeft > hitRedRight) || (meRight+movement < hitRedLeft))) && //collision check with red hitbox
                        ((( meTop > hitOrangeBot) || ( meBot < hitOrangeTop)) || ((meLeft > hitOrangeRight) || (meRight+movement < hitOrangeLeft))) && //collision check with orange hitbox
                        ((( meTop > hitPurpleBot) || ( meBot < hitPurpleTop)) || ((meLeft > hitPurpleRight) || (meRight+movement < hitPurpleLeft))) && //collision check with purple hitbox
                        ((( meTop > hitHouseBot) || ( meBot < hitHouseTop)) || ((meLeft > hitHouseRight) || (meRight+movement < hitHouseLeft))) && //collision check with house hitbox
                        ((( meTop > hitPantaiKiriBot) || ( meBot < hitPantaiKiriTop)) || ((meLeft > hitPantaiKiriRight) || (meRight+movement < hitPantaiKiriLeft))) && //collision check with pantai kiri hitbox
                        ((( meTop > hitPantaiKananBot) || ( meBot < hitPantaiKananTop)) || ((meLeft > hitPantaiKananRight) || (meRight+movement < hitPantaiKananLeft))) //collision check with pantai kanan hitbox
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
                    hitBlueTop = $(".hitbox-blue").position().top;
                    hitBlueBot = ($(".hitbox-blue").position().top + $(".hitbox-blue").height());
                    hitBlueLeft = $(".hitbox-blue").position().left;
                    hitBlueRight = $(".hitbox-blue").position().left + $(".hitbox-blue").width();
                    hitGreenTop = $(".hitbox-green").position().top;
                    hitGreenBot = ($(".hitbox-green").position().top + $(".hitbox-green").height());
                    hitGreenLeft = $(".hitbox-green").position().left;
                    hitGreenRight = $(".hitbox-green").position().left + $(".hitbox-green").width();
                    hitRedTop = $(".hitbox-red").position().top;
                    hitRedBot = ($(".hitbox-red").position().top + $(".hitbox-red").height());
                    hitRedLeft = $(".hitbox-red").position().left;
                    hitRedRight = $(".hitbox-red").position().left + $(".hitbox-red").width();
                    hitOrangeTop = $(".hitbox-orange").position().top;
                    hitOrangeBot = ($(".hitbox-orange").position().top + $(".hitbox-orange").height());
                    hitOrangeLeft = $(".hitbox-orange").position().left;
                    hitOrangeRight = $(".hitbox-orange").position().left + $(".hitbox-orange").width();
                    hitPurpleTop = $(".hitbox-purple").position().top;
                    hitPurpleBot = ($(".hitbox-purple").position().top + $(".hitbox-purple").height());
                    hitPurpleLeft = $(".hitbox-purple").position().left;
                    hitPurpleRight = $(".hitbox-purple").position().left + $(".hitbox-purple").width();
                    hitHouseTop = $(".hitbox-house").position().top;
                    hitHouseBot = ($(".hitbox-house").position().top + $(".hitbox-house").height());
                    hitHouseLeft = $(".hitbox-house").position().left;
                    hitHouseRight = $(".hitbox-house").position().left + $(".hitbox-house").width();
        
                    hitPantaiKiriTop = $(".hitbox-pantai-kiri").position().top;
                    hitPantaiKiriBot = ($(".hitbox-pantai-kiri").position().top + $(".hitbox-pantai-kiri").height());
                    hitPantaiKiriLeft = $(".hitbox-pantai-kiri").position().left;
                    hitPantaiKiriRight = $(".hitbox-pantai-kiri").position().left + $(".hitbox-pantai-kiri").width();
                    hitPantaiKananTop = $(".hitbox-pantai-kanan").position().top;
                    hitPantaiKananBot = ($(".hitbox-pantai-kanan").position().top + $(".hitbox-pantai-kanan").height());
                    hitPantaiKananLeft = $(".hitbox-pantai-kanan").position().left;
                    hitPantaiKananRight = $(".hitbox-pantai-kanan").position().left + $(".hitbox-pantai-kanan").width();
                    hitMenuTop = $(".hitbox-pantai-menu").position().top;
                    hitMenuBot = ($(".hitbox-pantai-menu").position().top + $(".hitbox-pantai-menu").height());
                    hitMenuLeft = $(".hitbox-pantai-menu").position().left;
                    hitMenuRight = $(".hitbox-pantai-menu").position().left + $(".hitbox-pantai-menu").width();

                    if((($(".me").position().top+$('.me').height()+40)<0) && //Checks wether .me is in bottom most screen
                        ((( meTop > hitBlueBot) || ( meBot+movement < hitBlueTop)) || ((meLeft > hitBlueRight) || (meRight < hitBlueLeft))) && //collision check with blue hitbox
                        ((( meTop > hitGreenBot) || ( meBot+movement < hitGreenTop)) || ((meLeft > hitGreenRight) || (meRight < hitGreenLeft))) && //collision check with green hitbox
                        ((( meTop > hitRedBot) || ( meBot+movement < hitRedTop)) || ((meLeft > hitRedRight) || (meRight < hitRedLeft))) && //collision check with red hitbox
                        ((( meTop > hitOrangeBot) || ( meBot+movement < hitOrangeTop)) || ((meLeft > hitOrangeRight) || (meRight < hitOrangeLeft))) && //collision check with orange hitbox
                        ((( meTop > hitPurpleBot) || ( meBot+movement < hitPurpleTop)) || ((meLeft > hitPurpleRight) || (meRight < hitPurpleLeft))) &&//collision check with purple hitbox
                        ((( meTop > hitHouseBot) || ( meBot+movement < hitHouseTop)) || ((meLeft > hitHouseRight) || (meRight < hitHouseLeft))) && //collision check with house hitbox
                        ((( meTop > hitPantaiKiriBot) || ( meBot+movement < hitPantaiKiriTop)) || ((meLeft > hitPantaiKiriRight) || (meRight < hitPantaiKiriLeft))) && //collision check with pantai kiri hitbox
                        ((( meTop > hitPantaiKananBot) || ( meBot+movement < hitPantaiKananTop)) || ((meLeft > hitPantaiKananRight) || (meRight < hitPantaiKananLeft))) //collision check with pantai kanan hitbox
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
    })

    $(document).on("touchend", function(){
        meBot = (($(".me").position().top) + $(".me").height()+ $(".image-map").height());
        meTop = ($(".me").position().top + $(".image-map").height());
        meLeft = ($(".me").position().left);
        meRight = $(".me").position().left + $('.me').width();
        hitBlueTop = $(".hitbox-blue").position().top;
        hitBlueBot = ($(".hitbox-blue").position().top + $(".hitbox-blue").height());
        hitBlueLeft = $(".hitbox-blue").position().left;
        hitBlueRight = $(".hitbox-blue").position().left + $(".hitbox-blue").width();
        hitGreenTop = $(".hitbox-green").position().top;
        hitGreenBot = ($(".hitbox-green").position().top + $(".hitbox-green").height());
        hitGreenLeft = $(".hitbox-green").position().left;
        hitGreenRight = $(".hitbox-green").position().left + $(".hitbox-green").width();
        hitRedTop = $(".hitbox-red").position().top;
        hitRedBot = ($(".hitbox-red").position().top + $(".hitbox-red").height());
        hitRedLeft = $(".hitbox-red").position().left;
        hitRedRight = $(".hitbox-red").position().left + $(".hitbox-red").width();
        hitOrangeTop = $(".hitbox-orange").position().top;
        hitOrangeBot = ($(".hitbox-orange").position().top + $(".hitbox-orange").height());
        hitOrangeLeft = $(".hitbox-orange").position().left;
        hitOrangeRight = $(".hitbox-orange").position().left + $(".hitbox-orange").width();
        hitPurpleTop = $(".hitbox-purple").position().top;
        hitPurpleBot = ($(".hitbox-purple").position().top + $(".hitbox-purple").height());
        hitPurpleLeft = $(".hitbox-purple").position().left;
        hitPurpleRight = $(".hitbox-purple").position().left + $(".hitbox-purple").width();
        hitHouseTop = $(".hitbox-house").position().top;
        hitHouseBot = ($(".hitbox-house").position().top + $(".hitbox-house").height());
        hitHouseLeft = $(".hitbox-house").position().left;
        hitHouseRight = $(".hitbox-house").position().left + $(".hitbox-house").width();

        hitPantaiKiriTop = $(".hitbox-pantai-kiri").position().top;
        hitPantaiKiriBot = ($(".hitbox-pantai-kiri").position().top + $(".hitbox-pantai-kiri").height());
        hitPantaiKiriLeft = $(".hitbox-pantai-kiri").position().left;
        hitPantaiKiriRight = $(".hitbox-pantai-kiri").position().left + $(".hitbox-pantai-kiri").width();
        hitPantaiKananTop = $(".hitbox-pantai-kanan").position().top;
        hitPantaiKananBot = ($(".hitbox-pantai-kanan").position().top + $(".hitbox-pantai-kanan").height());
        hitPantaiKananLeft = $(".hitbox-pantai-kanan").position().left;
        hitPantaiKananRight = $(".hitbox-pantai-kanan").position().left + $(".hitbox-pantai-kanan").width();
        hitMenuTop = $(".hitbox-pantai-menu").position().top;
        hitMenuBot = ($(".hitbox-pantai-menu").position().top + $(".hitbox-pantai-menu").height());
        hitMenuLeft = $(".hitbox-pantai-menu").position().left;
        hitMenuRight = $(".hitbox-pantai-menu").position().left + $(".hitbox-pantai-menu").width();

        //collision check with blue hitbox
        if(!((( meTop-movement > hitBlueBot) || ( meBot+movement < hitBlueTop)) || ((meLeft-movement > hitBlueRight) || (meRight+movement < hitBlueLeft)))){
            $(".blue-msg").css("display", "block");
            $(".act-button").on("click", function(){
                if(!((( meTop-movement > hitBlueBot) || ( meBot+movement < hitBlueTop)) || ((meLeft-movement > hitBlueRight) || (meRight+movement < hitBlueLeft)))){
                    $(".modal-detail").css("display", "block");
                    $(".modal-detail-achievement").css("display", "block");
                    $(".home-display").addClass('dark');
                    $(".modal-detail").css("animation", "fadein .5s");
                }
            })
        }else{
            $(".blue-msg").css("display", "none");
        }
        
        //collision check with green hitbox
        if(!((( meTop-movement > hitGreenBot) || ( meBot+movement < hitGreenTop)) || ((meLeft-movement > hitGreenRight) || (meRight+movement < hitGreenLeft)))){
            $(".green-msg").css("display", "block");
            $(".act-button").on("click", function(){
                if(!((( meTop-movement > hitGreenBot) || ( meBot+movement < hitGreenTop)) || ((meLeft-movement > hitGreenRight) || (meRight+movement < hitGreenLeft)))){
                    $(".modal-detail").css("display", "block");
                    $(".modal-detail-myinfo").css("display", "block");
                    $(".home-display").addClass('dark');
                    $(".modal-detail").css("animation", "fadein .5s");
                }
            })
        }else{
            $(".green-msg").css("display", "none");
        }

        //collision check with Red hitbox
        if(!((( meTop-movement > hitRedBot) || ( meBot+movement < hitRedTop)) || ((meLeft-movement > hitRedRight) || (meRight+movement < hitRedLeft)))){
            $(".red-msg").css("display", "block");
            $(".act-button").on("click", function(){
                if(!((( meTop-movement > hitRedBot) || ( meBot+movement < hitRedTop)) || ((meLeft-movement > hitRedRight) || (meRight+movement < hitRedLeft)))){
                    $(".modal-detail").css("display", "block");
                    $(".modal-detail-experience").css("display", "block");
                    $(".home-display").addClass('dark');
                    $(".modal-detail").css("animation", "fadein .5s");
                }
            })
        }else{
            $(".red-msg").css("display", "none");
        }

        //collision check with Orange hitbox
        if(!((( meTop-movement > hitOrangeBot) || ( meBot+movement < hitOrangeTop)) || ((meLeft-movement > hitOrangeRight) || (meRight+movement < hitOrangeLeft)))){
            $(".orange-msg").css("display", "block");
            $(".act-button").on("click", function(){
                if(!((( meTop-movement > hitOrangeBot) || ( meBot+movement < hitOrangeTop)) || ((meLeft-movement > hitOrangeRight) || (meRight+movement < hitOrangeLeft)))){
                    $(".modal-detail").css("display", "block");
                    $(".modal-detail-skills").css("display", "block");
                    $(".home-display").addClass('dark');
                    $(".modal-detail").css("animation", "fadein .5s");
                }
            })
        }else{
            $(".orange-msg").css("display", "none");
        }

        //collision check with Purple hitbox
        if(!((( meTop-movement > hitPurpleBot) || ( meBot+movement < hitPurpleTop)) || ((meLeft-movement > hitPurpleRight) || (meRight+movement < hitPurpleLeft)))){
            $(".purple-msg").css("display", "block");
            $(".act-button").on("click", function(){
                if(!((( meTop-movement > hitPurpleBot) || ( meBot+movement < hitPurpleTop)) || ((meLeft-movement > hitPurpleRight) || (meRight+movement < hitPurpleLeft)))){
                    $(".modal-detail").css("display", "block");
                    $(".modal-detail-education").css("display", "block");
                    $(".home-display").addClass('dark');
                    $(".modal-detail").css("animation", "fadein .5s");
                }
            })
        }else{
            $(".purple-msg").css("display", "none");
        }
        
        //collision check with House hitbox
        if(!((( meTop-movement > hitHouseBot) || ( meBot+movement < hitHouseTop)) || ((meLeft-movement > hitHouseRight) || (meRight+movement < hitHouseLeft)))){
            $(".house-msg").css("display", "block");
            $(".act-button").on("click", function(){
                if(!((( meTop-movement > hitHouseBot) || ( meBot+movement < hitHouseTop)) || ((meLeft-movement > hitHouseRight) || (meRight+movement < hitHouseLeft)))){
                    window.location.replace("portfolio.html");
                }
            })
        }else{
            $(".house-msg").css("display", "none");
        }

        //collision check with Menu hitbox
        if(!((( meTop > hitMenuBot) || ( meBot < hitMenuTop)) || ((meLeft > hitMenuRight) || (meRight < hitMenuLeft)))){
            $(".menu-msg").css("display", "block");
            $(".act-button").on("click", function(){
                if(!((( meTop > hitMenuBot) || ( meBot < hitMenuTop)) || ((meLeft > hitMenuRight) || (meRight < hitMenuLeft)))){
                    window.location.replace("index.html");
                }
            })
        }else{
            $(".menu-msg").css("display", "none");
        }
        
        if(touchstartID!=-1) {  //Only stop if exists
            clearInterval(touchstartID);
            touchstartID=-1;
        }
    })
});

// stop long touch hold from poping up context menus
$(document).on('contextmenu', function (e) {
    return false;
});