$(document).ready(function () {
    $(document).on('keydown',function (e){   
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

            switch(e.which){
                case 37: //left arrow key
                    if(meLeft > 40 && //Checks wether .me is in left most screen
                        ((( meTop > hitKiriBot) || ( meBot < hitKiriTop)) || ((meLeft-20 > hitKiriRight) || (meRight < hitKiriLeft))) && //collision check with kiri hitbox
                        ((( meTop > hitKananBot) || ( meBot < hitKananTop)) || ((meLeft-20 > hitKananRight) || (meRight < hitKananLeft))) && //collision check with Kanan hitbox
                        ((( meTop > hitFireBot) || ( meBot < hitFireTop)) || ((meLeft-20 > hitFireRight) || (meRight < hitFireLeft))) && //collision check with Fire hitbox
                        ((( meTop > hitBawahBot) || ( meBot < hitBawahTop)) || ((meLeft-20 > hitBawahRight) || (meRight < hitBawahLeft))) //collision check with Bawah hitbox
                    ){ 
                        $('.sprite-left').css("opacity", 1);
                        $('.sprite-right').css("opacity", 0);
                        $('.sprite-up').css("opacity", 0);
                        $('.sprite-down').css("opacity", 0);
                        $('.me').stop().animate({
                            left: '-=20'
                        }, 100, 'linear'); 
                    }
                    break;
                case 38: //up arrow key
                    if((Math.abs($(".me").position().top)<$(".image-map").height()) && //Checks wether .me is in top most screen
                        ((( meBot-40 > hitAtasBot)) || ((meLeft > hitAtasRight) || (meRight < hitAtasLeft))) && //collision check with Atas hitbox
                        ((( meTop-20 > hitKiriBot) || ( meBot < hitKiriTop)) || ((meLeft > hitKiriRight) || (meRight < hitKiriLeft))) && //collision check with Kiri hitbox
                        ((( meTop-20 > hitKananBot) || ( meBot < hitKananTop)) || ((meLeft > hitKananRight) || (meRight < hitKananLeft))) && //collision check with Kanan hitbox
                        ((( meTop-20 > hitFireBot) || ( meBot < hitFireTop)) || ((meLeft > hitFireRight) || (meRight < hitFireLeft))) && //collision check with Fire hitbox
                        ((( meTop-20 > hitBawahBot) || ( meBot < hitBawahTop)) || ((meLeft > hitBawahRight) || (meRight < hitBawahLeft))) //collision check with Bawah hitbox
                    ){
                        $('.sprite-left').css("opacity", 0);
                        $('.sprite-right').css("opacity", 0);
                        $('.sprite-up').css("opacity", 1);
                        $('.sprite-down').css("opacity", 0);
                        $('.me').stop().animate({
                            top: '-=20'
                        }, 100, 'linear'); 
                    }
                    break;
                case 39://right arrow key
                    if(meRight+40 < $(".image-map").width() && //Checks wether .me is in right most screen
                        ((( meTop > hitKiriBot) || ( meBot < hitKiriTop)) || ((meLeft > hitKiriRight) || (meRight+20 < hitKiriLeft))) && //collision check with Kiri hitbox
                        ((( meTop > hitKananBot) || ( meBot < hitKananTop)) || ((meLeft > hitKananRight) || (meRight+20 < hitKananLeft))) && //collision check with Kanan hitbox
                        ((( meTop > hitFireBot) || ( meBot < hitFireTop)) || ((meLeft > hitFireRight) || (meRight+20 < hitFireLeft))) && //collision check with Fire hitbox
                        ((( meTop > hitBawahBot) || ( meBot < hitBawahTop)) || ((meLeft > hitBawahRight) || (meRight+20 < hitBawahLeft))) //collision check with Bawah hitbox
                    ){
                        $('.sprite-left').css("opacity", 0);
                        $('.sprite-right').css("opacity", 1);
                        $('.sprite-up').css("opacity", 0);
                        $('.sprite-down').css("opacity", 0);
                        $('.me').stop().animate({
                            left: '+=20'
                        }, 100, 'linear'); 
                    }
                    break;
                case 40:  //bottom arrow key
                    if((($(".me").position().top+$('.me').height())<0) && //Checks wether .me is in bottom most screen
                        ((( meTop > hitKiriBot) || ( meBot+20 < hitKiriTop)) || ((meLeft > hitKiriRight) || (meRight < hitKiriLeft))) && //collision check with Kiri hitbox
                        ((( meTop > hitKananBot) || ( meBot+20 < hitKananTop)) || ((meLeft > hitKananRight) || (meRight < hitKananLeft))) && //collision check with Kanan hitbox
                        ((( meTop > hitFireBot) || ( meBot+20 < hitFireTop)) || ((meLeft > hitFireRight) || (meRight < hitFireLeft))) && //collision check with Fire hitbox
                        ((( meTop > hitBawahBot) || ( meBot+20 < hitBawahTop)) || ((meLeft > hitBawahRight) || (meRight < hitBawahLeft))) //collision check with Bawah hitbox
                    ){ 
                        $('.sprite-left').css("opacity", 0);
                        $('.sprite-right').css("opacity", 0);
                        $('.sprite-up').css("opacity", 0);
                        $('.sprite-down').css("opacity", 1);
                        $('.me').stop().animate({
                            top: '+=20'
                        }, 100, 'linear');
                    }
                    break;
            }
        }
      });
});