$(function(){
        
    var date  = new Date();
    var hour = date.getHours();
    var wrapper = $('#wrapper');

    if( hour >=5 && hour < 11 ){
        wrapper.removeClass().addClass('morning');
    }else if( hour >=11 && hour < 17 ){
        wrapper.removeClass().addClass('afternoon');
    }else if( hour >=17 && hour < 20 ){
        wrapper.removeClass().addClass('evening');
    }else{  
        wrapper.removeClass().addClass('night');
    }

});