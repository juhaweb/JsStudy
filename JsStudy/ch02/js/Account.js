/*객체정의.  객체를 정의해서 함수를 실행한다.  
  객체 시작은 대문자로(Account) */

function Account(bank, id, name, money){
        
    //멤버변수(특성)
    this.bank = bank;
    this.id = id;
    this.name = name;
    this.money = money;

    //멤버함수(기능)
    this.deposit = function(money){
        this.money += money;  //+=더하고 대입한다
    }
    this.withdraw = function(money){
        this.money -= money;

    }
    this.info = function(){
        document.write('=====================<br/>');
        document.write('은 행 명 :'+this.bank+'<br/>');
        document.write('계좌번호 :'+this.id+'<br/>');
        document.write('입 금 주 :'+this.name+'<br/>');
        document.write('현재잔액 :'+this.money+'<br/>');
        document.write('=====================<br/>');

    }        

}