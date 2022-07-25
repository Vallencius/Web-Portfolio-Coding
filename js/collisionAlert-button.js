$(document).ready(function () { 
    $(document).on('mouseup',function (e){   
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
        var hitMenuTop = $(".hitbox-pantai-menu").position().top;
        var hitMenuBot = ($(".hitbox-pantai-menu").position().top + $(".hitbox-pantai-menu").height());
        var hitMenuLeft = $(".hitbox-pantai-menu").position().left;
        var hitMenuRight = $(".hitbox-pantai-menu").position().left + $(".hitbox-pantai-menu").width();
    
        //collision check with blue hitbox
        if(!((( meTop-20 > hitBlueBot) || ( meBot+20 < hitBlueTop)) || ((meLeft-20 > hitBlueRight) || (meRight+20 < hitBlueLeft)))){
            $(".blue-msg").css("display", "block");
            if(e.which == 32){
                $(".modal-detail").css("display", "block");
                $(".modal-detail-achievement").css("display", "block");
                $(".home-display").addClass('dark');
                $(".modal-detail").css("animation", "fadein .5s");
            }
        }else{
            $(".blue-msg").css("display", "none");
        }
        
        //collision check with green hitbox
        if(!((( meTop-20 > hitGreenBot) || ( meBot+20 < hitGreenTop)) || ((meLeft-20 > hitGreenRight) || (meRight+20 < hitGreenLeft)))){
            $(".green-msg").css("display", "block");
            if(e.which == 32){
                $(".modal-detail").css("display", "block");
                $(".modal-detail-myinfo").css("display", "block");
                $(".home-display").addClass('dark');
                $(".modal-detail").css("animation", "fadein .5s");
            }
        }else{
            $(".green-msg").css("display", "none");
        }

        //collision check with Red hitbox
        if(!((( meTop-20 > hitRedBot) || ( meBot+20 < hitRedTop)) || ((meLeft-20 > hitRedRight) || (meRight+20 < hitRedLeft)))){
            $(".red-msg").css("display", "block");
            if(e.which == 32){
                $(".modal-detail").css("display", "block");
                $(".modal-detail-experience").css("display", "block");
                $(".home-display").addClass('dark');
                $(".modal-detail").css("animation", "fadein .5s");
            }
        }else{
            $(".red-msg").css("display", "none");
        }

        //collision check with Orange hitbox
        if(!((( meTop-20 > hitOrangeBot) || ( meBot+20 < hitOrangeTop)) || ((meLeft-20 > hitOrangeRight) || (meRight+20 < hitOrangeLeft)))){
            $(".orange-msg").css("display", "block");
            if(e.which == 32){
                $(".modal-detail").css("display", "block");
                $(".modal-detail-skills").css("display", "block");
                $(".home-display").addClass('dark');
                $(".modal-detail").css("animation", "fadein .5s");
            }
        }else{
            $(".orange-msg").css("display", "none");
        }

        //collision check with Purple hitbox
        if(!((( meTop-20 > hitPurpleBot) || ( meBot+20 < hitPurpleTop)) || ((meLeft-20 > hitPurpleRight) || (meRight+20 < hitPurpleLeft)))){
            $(".purple-msg").css("display", "block");
            if(e.which == 32){
                $(".modal-detail").css("display", "block");
                $(".modal-detail-education").css("display", "block");
                $(".home-display").addClass('dark');
                $(".modal-detail").css("animation", "fadein .5s");
            }
        }else{
            $(".purple-msg").css("display", "none");
        }
        
        //collision check with House hitbox
        if(!((( meTop-20 > hitHouseBot) || ( meBot+20 < hitHouseTop)) || ((meLeft-20 > hitHouseRight) || (meRight+20 < hitHouseLeft)))){
            $(".house-msg").css("display", "block");
            if(e.which == 32){
                window.location.replace("portfolio.html");
            }
        }else{
            $(".house-msg").css("display", "none");
        }

        //collision check with Menu hitbox
        if(!((( meTop > hitMenuBot) || ( meBot < hitMenuTop)) || ((meLeft > hitMenuRight) || (meRight < hitMenuLeft)))){
            $(".menu-msg").css("display", "block");
            if(e.which == 32){
                window.location.replace("index.html");
            }
        }else{
            $(".menu-msg").css("display", "none");
        }
    });
    $(document).on('mousedown',function (e){
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