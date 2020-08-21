class Calc{
    add(x, y){
        return x+y;
    }
    sub(x, y){
        return x-y;
    }
    mul(x, y){
        return x*y;
    }
    div(x, y){
        return x/y;
    }
}


let str = "";
let op1 = 0;
let op2 = 0;

function resetInput(){
    str = "";
    op1 = 0; 
    op2 = 0; 
    document.getElementById("num").value = str;
}

function clicked(id) { 
    str += id;
    op1 = parseFloat(str);
    document.getElementById("num").value = str; 
}

function setStr(val){
    str = ""; 
    document.getElementById("num").value = str;
}

document.getElementById('add').addEventListener('click', function(e){
    setStr(op2);
    op2 += op1;
    console.log(op2);  
    printNew(op2); 
})

document.getElementById('sub').addEventListener('click', function(e){
    setStr(op2); 
    op2 -= op1;
    console.log(op2);
    printNew(op2);
})

document.getElementById('mul').addEventListener('click', function(e){
    setStr(op2); 
    op2 = op2!=0 ? op2*= op1 : op1;
    console.log(op2);
    printNew(op2);
})

document.getElementById('div').addEventListener('click', function(e){
    setStr(op2); 
    op2 = op2!=0 ? op2 /= op1 : op1;
    console.log(op2);
    printNew(op2);
})

document.getElementById('ris').addEventListener('click', function(e){
    printNew(op2);
})

function printNew(val){
    document.getElementById("num").value = val;
}