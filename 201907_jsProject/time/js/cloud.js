// 배경 구름 이동 //
$(document).ready(function(){
    var time = 1000*50;
    var cloud = $('.cloud');
    cloud.eq(0).animate({'left':'0%'},time, function(){
        $(this).animate({'left':'100%'},time);
    });
    cloud.eq(1).animate({'left':'100%'}, time, function(){
        $(this).css({'left':'-100%'}).animate({'left':'100%'},time);
    });
}); 
// 배경 M 구름 이동 //
$(document).ready(function(){
    var time = 1000*40;
    var mcd = $('.mcd');
    mcd.eq(0).animate({'left':'0%'},time, function(){
        $(this).animate({'left':'100%'},time);
    });
    mcd.eq(1).animate({'left':'100%'}, time, function(){
        $(this).css({'left':'-100%'}).animate({'left':'100%'},time);
    });
}); 
