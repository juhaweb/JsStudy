$(document).ready(function(){

  // 7-2. 동적 태그생성 및 데이터 출력

  var table = $('.list');

  $.get('http://localhost:8085/ch14/14-9.jsp',function(data){
    
    for(var i=0; i<data.length; i++){

    table.append('<tr></tr>');
    table.find('tr').eq(i+1).append("<td>"+data[i].uid+"</td>");
    table.find('tr').eq(i+1).append("<td>"+data[i].name+"</td>");
    table.find('tr').eq(i+1).append("<td>"+data[i].hp+"</td>");
    table.find('tr').eq(i+1).append("<td>"+data[i].pos+"</td>");
    table.find('tr').eq(i+1).append("<td>"+data[i].dep+"</td>");
    table.find('tr').eq(i+1).append("<td>"+data[i].rdate.substring(2,10)+"</td>");
    table.find('tr').eq(i+1).append("<td><a href='http://localhost:8085/ch14/14-11.jsp?uid="+data[i].uid+"'>삭제</a></td>");
    }
    
  });



  // 7-2. 직원 삭제하기 
  // list a 태그는 동적태그라 .. 없어... 안돼.. 아래와 같이 document . 줘야함. 

  $(document).on('click','.list a',function(e){
 
    e.preventDefault();

    var tag = $(this)
    var url = tag.attr('href');

    $.get(url, function(data){
      
      // tr 삭제할거야. 
      tag.parent().parent().remove();

    });
 
  });



  // 7-2. 직원 등록하기
  $('input[type=submit]').click(function(){

    var uid   = $('input[name=uid]').val();
    var name  = $('input[name=name]').val();
    var hp    = $('input[name=hp]').val();
    var pos   = $('select[name=pos]').val();
    var dep   = $('select[name=dep]').val();
    var rdate = $('input[name=rdate]').val();
    var data  = {"uid":uid, "name":name, "hp":hp, "pos":pos, "dep":dep, "rdate":rdate};

    $.post('http://localhost:8085/ch14/14-10.jsp', data, function(){



      // 동적태그에 동적태그 추가..?

        $.get('http://localhost:8085/ch14/14-9.jsp',data,function(data){
        
        var tag = $('.list');
    
        tag.append('<tr></tr>');
        tag.find('tr').last().append("<td>"+uid+"</td>");
        tag.find('tr').last().append("<td>"+name+"</td>");
        tag.find('tr').last().append("<td>"+hp+"</td>");
        tag.find('tr').last().append("<td>"+pos+"</td>");
        tag.find('tr').last().append("<td>"+dep+"</td>");
        tag.find('tr').last().append("<td>"+rdate.substring(2,10)+"</td>");
        tag.find('tr').last().append("<td><a href='http://localhost:8085/ch14/14-11.jsp?uid="+uid+"'>삭제</a></td>");
        
      });

    
    });

  });












});



  