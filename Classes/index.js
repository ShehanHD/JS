const obj = new ControlForm();

let name;
let surname;
let email;
let password;



document.getElementById('submit').addEventListener('click', function (e){
    e.preventDefault();
})

document.getElementById('first_name').addEventListener('input', function (e){
    if(obj.verifyValue(e, /^[a-zA-Z\ ]{2,}$/)){  
        e.target.className='valid'; 
        document.getElementById("errName").innerHTML = "";
    }
    else{
        document.getElementById("errName").innerHTML = "Only letters";
        e.target.className='invalid';
    }
})

document.getElementById('last_name').addEventListener('input', function (e){
    if(obj.verifyValue(e, /^[a-zA-Z\ ]{2,}$/)){
        document.getElementById("errLastName").innerHTML = "";
        e.target.className='valid';
    }
    else{
        document.getElementById("errLastName").innerHTML = "Only letters";
        e.target.className='invalid';
    }
})

document.getElementById('email').addEventListener('input', function (e){
    if(obj.verifyValue(e, /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        document.getElementById("errEmail").innerHTML = "";
    }
    else{
        document.getElementById("errEmail").innerHTML = "Add a valid e-mail!";
    }
})

document.getElementById('password').addEventListener('input', function (e){
    if(obj.verifyValue(e, /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)){
        password = e.target.value;  
        e.target.className='valid';
        document.getElementById("errPass").innerHTML = "";
    }
    else{
        document.getElementById("errPass").innerHTML = "should contain at least one digit, one lower case, one upper case and more than 8 characters";
        e.target.className='invalid'; 
    }
})

document.getElementById('re_password').addEventListener('input', function (e){
    if(obj.comparePass(password, e)){
        e.target.className='valid';
        document.getElementById("errMatch").innerHTML = "";
    }
    else{
        e.target.className='invalid';
        document.getElementById("errMatch").innerHTML = "Password dosen't match";
        console.log(e);   
    }
})