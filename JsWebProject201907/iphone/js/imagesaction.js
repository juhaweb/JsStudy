$(document).ready(function() {
            
    $('#fullpage').fullpage({
        navigation:true,
        onLeave:function(origin, destination, direction){
            // console.log('onLeave : '+origin.index+' / '+destination.index+' / '+direction);
            // 각 섹션 퇴장 애니메이션
            
            var current = origin.index +1;

            if(current == 1 ) {     //current(오리진 index)가 1이다 = 첫 섹션이 퇴장할때다. 

                $('.s11').animate({'opacity':'0.6'},1000); //1섹션 퇴장시 opacity가 0.6로 애니메이트. 
            }else if(current == 2){
                $('.s21').animate({'left':'400px'},1000); //2섹션 퇴장시 s21이 옆으로감. 
                $('.s22').animate({'left':'400px'},1000); //2섹션 퇴장시 s22이 옆으로감. 
                $('.s23').animate({'left':'514px'},1000); //2섹션 퇴장시 s23이 옆으로감. 
            }else if(current == 3){
                $('.s42').animate({'bottom':'100px'},1000); //3섹션 퇴장시 s42 원위치.
            }
        },

        afterLoad:function(origin, destination, direction){
            // console.log('afterLoad : '+origin.index+' / '+destination.index+' / '+direction);
            // 각 섹션 입장 애니메이션
            var current = destination.index +1;

            if(current == 1 ) {     //current(오리진 index)가 1이다 = 첫 섹션이 입장할때다. 

                $('.s11').animate({'opacity':'1'},1000); //1섹션으로 입장시 opacity가 1로 애니메이트. 
            }else if(current == 2){
                $('.s21').animate({'left':'150px'},1000); //2섹션으로 입장시 s21이 옆으로감. 
                $('.s22').animate({'left':'420px'},1000); //2섹션으로 입장시 s22이 옆으로감. 
                $('.s23').animate({'left':'680px'},1000); //2섹션으로 입장시 s23이 옆으로감. 
            }else if(current == 3){
                $('.s42').animate({'bottom':'80%'},1000); //3섹션으로 입장시 s42가 올라옴. 
            }
        }

        
    });

});