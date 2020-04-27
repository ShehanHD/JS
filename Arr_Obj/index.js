let state = [];

document.getElementById("submit").addEventListener('click', function(e){
    e.preventDefault();
    
    user = {
        'id' :  Date.now(),
        'name' : document.getElementById("first_name").value,
        'surname' : document.getElementById("last_name").value,
    }
    
    state = [...state , user];

    print();
})

const print = () => {
    let str = "";

    state.forEach(element => {
        str += "<ul class='collection container' onclick=\"del("+ element.id +")\"><li class='collection-item'>"+element.name+"</li>";
        str += "<li class='collection-item'>"+element.surname+"</li></ul>";
    });

    document.getElementById('print').innerHTML = str;
}

const del = (id) =>{
    state = state.filter(item => item.id !== id );
    print();
}


document.getElementById("submit2").addEventListener('click', function(e){
    e.preventDefault();
    let data = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

    user = {
        'id' :  Date.now(),
        'name' : document.getElementById("first").value,
        'surname' : document.getElementById("last").value,
    }
    
    data = [...data , user];

    localStorage.setItem('users', JSON.stringify(data));
    
    print2();
})

const print2 = () => {
    let str = "";
    let data = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

    data.forEach(element => {
        str += "<ul class='collection container' onclick=\"del2("+ element.id +")\"><li class='collection-item'>"+element.name+"</li>";
        str += "<li class='collection-item'>"+element.surname+"</li></ul>";
    });

    document.getElementById('print2').innerHTML = str;
}

const del2 = (id) =>{
    let data = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

    // console.log('====================================');
    // console.log(data.filter(item => item.id !== id ));
    // console.log('====================================');

    data = data.filter(item => item.id !== id )
    
    localStorage.setItem('users', JSON.stringify(data));

    print2();
}