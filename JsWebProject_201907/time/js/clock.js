$(document).ready(function(){

    var span = $('.mobile > p > span');

    setInterval(function(){

        var date  = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();

        if(h < 10) { h = '0'+h; }  // h가 10보다 작을때 앞에 0을 붙임. 
        if(m < 10) { m = '0'+m; }
        if(s < 10) { s = '0'+s; }

        span.eq(0).text(h);
        span.eq(1).text(m);
        span.eq(2).text(s);

    },1000);   //인터벌 끝. 인터벌 시간. 

});