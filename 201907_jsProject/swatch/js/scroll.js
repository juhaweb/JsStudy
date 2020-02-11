$(function(){

    var li = $('.gnb > li'); // 여기 두는게 좋음. 


    // 스크롤바 이동에 따른 메뉴 상태변화
    $(window).scroll(function(){

        
        var top = $(this).scrollTop();
        var h = $(window).height();  //브라우저 높이 구함. 

        if(top >= 0 && top < h*1 ){
            li.removeClass().eq(0).addClass('on');
        }else if(top >= h*1 && top < h*2 ){
            li.removeClass().eq(1).addClass('on');
        }else if(top >= h*2 && top < h*3 ){
            li.removeClass().eq(2).addClass('on');
        }else{
            li.removeClass().eq(3).addClass('on');
        }

    });


});