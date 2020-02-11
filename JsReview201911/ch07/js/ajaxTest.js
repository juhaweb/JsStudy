$(document).ready(function(){


  // 데이터 불러오기
  $('#btn1').click(function(){
    var td = $('#t1 tr>td:nth-child(2)');

    $.ajax({
      url:'http://localhost:8085/ch14/14-7.jsp',
      type:'get',
      dataType:'json',
      success:function(data){
        td.eq(0).text(data.k1);
        td.eq(1).text(data.k2);
        td.eq(2).text(data.k3);
        td.eq(3).text(data.k4);
        td.eq(4).text(data.k5);
      }
    });
  });


  // 과일 데이터 출력하기
  $('#btn2').click(function(){
    var td2 = $('#t2 tr>td:nth-child(2)');

    $.ajax({
      url:'http://chhak.kr/ajax/data/data1.json',
      type:'get',
      dataType:'json',
      success:function(data){
        td2.eq(0).text(data.name);
        td2.eq(1).text(data.price);
        td2.eq(2).text(data.date);
        td2.eq(3).text(data.origin);
      }
    });
  });


  // 데이터 출력하기
    
  var tr = $('#t3 tr');

    $('#btn3').click(function(){

    $.ajax({
      url:'http://localhost:8085/ch14/14-8.jsp',
      type:'get',
      dataType:'json',
      success:function(data){

        var fruit = data.fruit;   // 3개짜리 배열 
        
        for(var i=0; i<fruit.length; i++){

          var obj = fruit[i];
          
          tr.eq(i+1).children().eq(0).text(obj.name);
          tr.eq(i+1).children().eq(1).text(obj.price);
          tr.eq(i+1).children().eq(2).text(obj.origin);
        }

      }
    });
  });

});



  