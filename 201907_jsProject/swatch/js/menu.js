$(function(){

     // 로고 클릭시 상단이동
     $('.logo').click(function(e){  //e 이벤트 선언..??
         e.preventDefault();   //태그의 기본동작을 막음. 
         $('html,body').animate({'scrollTop':'0px'},500);   //(html은 웹표준? body는 엣지.익플. )
     });


     //왼쪽 사이드 메뉴
     var li = $('.gnb > li');
     $('.gnb > li > a').click(function(e){
         e.preventDefault();  //#태그 해제 //a태그 클릭이구나 하고 이해하면됨. 
         
         var i = $(this).parent().index();   // a의 부모인 li의 인덱스를 구함. 
         var h = $(window).height();  //윈도우 높이를 구함 (섹션의 높이임)
         li.removeClass().eq(i).addClass('on');   // addClass하기전에 전체 li 클래스 리무브 
                                                  /*li.removeClass();        li 전체 클래스 리무브 하고 
                                                  li.eq(i).addClass('on');   li중에서 i번째 클래스 add on  */   
         $('html, body').stop().animate({'scrollTop':h*i},1000,'easeOutBounce');  
     });

     






});