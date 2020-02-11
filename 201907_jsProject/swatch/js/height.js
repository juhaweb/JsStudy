
$(document).ready(function(){

// section에 높이 지정 
var sec = $('section');
sec.height($(window).height());            
// 브라우저(window) 크키가 바뀔때(event.resize) 섹션 높이 다시 지정.

$(window).resize(function(){
    var h = $(this).height(); 
    $('section').height(h);
});

});