const verify = new ControlForm("index.php");

let name;
let surname;
let email;
let password;


let country;
$.ajax({
    method: "GET",
    url: "./paesi.json",
})
    .done(function( data ) {
        country = data;   
});


document.getElementById("re_password").disabled = true;

const checkName = (e) =>{
    if(verify.verifyValue(e, /^[a-zA-Z\ ]{2,}$/)){  
        e.target.className='valid'; 
        document.getElementById("errName").innerHTML = "";
    }
    else{
        document.getElementById("errName").innerHTML = "Must contain more than 2 alphabetical letters";
        e.target.className='invalid';
    }
}

const checkEmail = (e) =>{
    if(verify.verifyValue(e, /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        document.getElementById("errEmail").innerHTML = "";
        email = e.target.value;  
    }
    else{
        document.getElementById("errEmail").innerHTML = "Add a valid e-mail!";
    }
}

const checkPassword = (e) =>{
    if(verify.verifyValue(e, /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)){
        password = e.target.value;  
        e.target.className='valid';
        document.getElementById("errPass").innerHTML = "";
        document.getElementById("re_password").disabled = false;
    }
    else{
        document.getElementById("errPass").innerHTML = "should contain at least one digit, one lower case, one upper case and more than 8 characters";
        e.target.className='invalid'; 
        document.getElementById("re_password").disabled = true;
    }
}

const compPassword = (password, e) =>{
    if(verify.comparePass(password, e)){
        e.target.className='valid';
        document.getElementById("errMatch").innerHTML = "";
    }
    else{
        e.target.className='invalid';
        document.getElementById("errMatch").innerHTML = "Password doesn't match";
    }
}

document.getElementById("inCountry").addEventListener('input', function(e){
    const searchString = e.target.value;
    
    const test = country.filter(item => {
        return (
            item.name.includes(searchString)
        )
    });

    
    let dataList = document.getElementById("country");
    dataList.innerHTML="";
    console.log(test);
    
    test.forEach(element => {
        let node = document.createElement("option");
        let text = document.createTextNode(element.name);

        node.appendChild(text);
        dataList.appendChild(node);
    });
})

document.getElementById('submit').addEventListener('click', function (e){

    console.log(e);
})

document.getElementById('first_name').addEventListener('input', function (e){
    checkName(e);
})


document.getElementById('last_name').addEventListener('input', function (e){
    checkName(e);
})

document.getElementById('email').addEventListener('input', function (e){
    checkEmail(e);
})

document.getElementById('password').addEventListener('input', function (e){
    checkPassword(e);
})

document.getElementById('re_password').addEventListener('input', function (e){
    console.log(e);
    
    compPassword(password, e);
})