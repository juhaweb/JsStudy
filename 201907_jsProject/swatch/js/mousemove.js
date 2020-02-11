$(function(){

    var img1  = $('section:eq(0) > img');
    var img2  = $('section:eq(1) > img');
    var img3  = $('section:eq(2) > img');
    var img4  = $('section:eq(3) > img');

    $('section').mousemove(function(e){    // (e) 이벤트 ~ 여기서는 마우스 좌표의 정보. 
        
        var x = e.pageX ;
        var y = e.pageY ;

        // 봄
        img1.eq(0).css({'left': 10-(x/20) ,'top': 10-(y/16) });
        img1.eq(1).css({'left': 100-(x/86) ,'top': 120-(y/60) });
        img1.eq(2).css({'right': 10-(x/20) ,'bottom': 100-(y/26) });

        // 여름
        img2.eq(0).css({'left': 10-(x/20) ,'top': 10-(y/16) });
        img2.eq(1).css({'left': 100-(x/86) ,'top': 120-(y/60) });

        // 가을
        img3.eq(0).css({'left': 10-(x/20) ,'top': 10-(y/16) });
        img3.eq(1).css({'left': 100-(x/86) ,'top': 120-(y/60) });
        img3.eq(2).css({'right': 10-(x/20) ,'bottom': 100-(y/26) });

        // 겨울
        img4.eq(0).css({'left': 10-(x/20) ,'top': 10-(y/16) });
        img4.eq(1).css({'left': 100-(x/86) ,'top': 120-(y/60) });4

    });




});
