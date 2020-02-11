$(document).ready(function(){
  
  // addClass = 클래스 더하기
  $('.box1').click(function(){
    $(this).addClass('red');
  });
  
  // removeClass = 클래스 빼기
  $('.box2').click(function(){
    $(this).removeClass('green');
  });

  // hasClass = 클래스 가지고있는지 확인
  $('.box3').click(function(){
    var result = $(this).hasClass('blue');
    if(result){
      $(this).removeClass('blue');
    }else{
      $(this).addClass('blue');
    }
  });
  
  // toggleClass = has클래스 업그레이드판. 
  $('.box4').click(function(){
    $(this).toggleClass('red');
  });

});



// tabMenu 1 

$(function(){

  var btn = $ ('button');
  var tabDiv = $ ('article > div');

  btn.eq(0).click(function(){
      tabDiv.removeClass().eq(0).addClass('on');  
  });

  btn.eq(1).click(function(){
      tabDiv.removeClass().eq(1).addClass('on');
  });

  btn.eq(2).click(function(){
      tabDiv.removeClass().eq(2).addClass('on');
  });

  btn.eq(3).click(function(){
      tabDiv.removeClass('on').eq(3).addClass('on');
  });

});


// tabMenu 2 

$(function(){

  var btn = $ ('button');
  var div = $ ('article > div');

  btn.click(function(){
    var i = $(this).index();
    div.removeClass().eq(i).addClass('on'); 
  });

});




