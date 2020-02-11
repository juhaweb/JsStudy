// 배경 이미지 바뀜 

$(function(){

    var menu = $('.menu > li > a');

    menu.click(function(e){
        e.preventDefault();   //a 태그 링크 속성 막아줌. 

        var txt = $(this).text();
        $('#wrapper').removeClass().addClass(txt);

    });


    









});
