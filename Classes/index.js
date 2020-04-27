class ControlForm{
    verifyValue = (e, RegEx=/[\s\S]+/) => {
        return RegEx.test(e.target.value);
    }

    comparePass = (pass1, e) => {
        return pass1 === e.target.value ? true : false;
    }
}

const obj = new ControlForm();
let name;
let surname;
let email;
let password;



document.getElementById('submit').addEventListener('click', function (e){
    e.preventDefault();
})

document.getElementById('first_name').addEventListener('input', function (e){
    if(obj.verifyValue(e, /^[a-zA-Z]+$/)){
        console.log("ok");     
    }
    else{
        console.log("no")
    }
})

document.getElementById('last_name').addEventListener('input', function (e){
    if(obj.verifyValue(e, /^[a-zA-Z]+$/)){
        console.log("ok");     
    }
    else{
        console.log("no")
    }
})

document.getElementById('email').addEventListener('input', function (e){
    if(obj.verifyValue(e, /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        console.log("no");
    }
    else{
        console.log("Add a valid e-mail!");  
    }
})

document.getElementById('password').addEventListener('input', function (e){
    if(obj.verifyValue(e, /^[a-zA-Z]\w{3,14}$/)){
        console.log("Password expression. Password must be between 4 and 8 digits long and include at least one numeric digit.");
    }
    else{
        password = e.target.value;  
    }
})

document.getElementById('re_password').addEventListener('input', function (e){
    if(obj.comparePass(password, e)){
        console.log("ok");  
    }
    else{
        console.log("no");
        
    }
})