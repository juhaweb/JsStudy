$(function(){        


    // 전체 섹션 움직임. (마우스휠)
    $('section').mousewheel(function(e){

        var i = $(this).index() -1;  //섹션의 인덱스 번호를 구함. 
        var h = $(window).height();

        if(e.deltaY > 0 ){
            //마우스휠 업 - 섹션 위로 이동
            $('html,body').stop().animate({'scrollTop':h*(i-2)},1000,'easeOutBounce'); 
        }else{
            //마우스휠 다운  - 섹션 아래 이동
            $('html,body').stop().animate({'scrollTop':h*i},1000,'easeOutBounce'); 
        }
    });



    

});