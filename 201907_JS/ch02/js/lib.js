function plus(a, b){
    return a+b;
}

function minus(a, b){
    return a-b;
}

function multi(a, b){
    return a*b;
}


function div(a, b){
    return a/b;  
}


function gugudan(num){
    document.write('<h4>'+num+'단</h4><br/>');
    for(var i=1; i<=9; i++){
    document.write(num+' x '+i+' = '+num*i+'<br/>');
    }
}

