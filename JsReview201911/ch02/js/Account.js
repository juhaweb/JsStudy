  
// 객체 정의
function Account(bank,id,name,money) {
                // () 매개변수 선언 자리에다가 초기화 데이터를 받을거임. 

// 멤버 변수
this.bank = bank;
this.id = id;
this.name = name;
this.money = money;

// 멤버 함수 (익명함수로 선언)
this.deposit = function(money){
this.money += money;
}

this.withdraw = function(money){
this.money -= money;
}

this.info = function(){
document.write("=================================<br>");
document.write("은 행 명 : "+this.bank+"<br>");
document.write("계좌번호 : "+this.id+"<br>");
document.write("입 금 주 : "+this.name+"<br>");
document.write("현재잔액 : "+this.money+"<br>");
document.write("=================================<br>");
}

}
