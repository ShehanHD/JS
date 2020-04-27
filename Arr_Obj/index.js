let state = [];

document.getElementById("submit").addEventListener('click', function(e){
    e.preventDefault();
    let str = "";

    user = {
        'name' : document.getElementById("first_name").value,
        'surname' : document.getElementById("last_name").value,
    }
    
    state = [...state , user];

    state.forEach(element => {
        str += "<ul><p>"+element.name+"</p>";
        str += "<p>"+element.surname+"</p></ul>";
    });

    document.getElementById('print').innerHTML = str;
})



document.getElementById("submit2").addEventListener('click', function(e){
    e.preventDefault();
    let str = "";

    user = {
        'name' : document.getElementById("first").value,
        'surname' : document.getElementById("last").value,
    }
    
    let data = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

    data = [...data , user];

    localStorage.setItem('users', JSON.stringify(data))
    
    data.forEach(element => {
        str += "<ul><p>"+element.name+"</p>";
        str += "<p>"+element.surname+"</p></ul>";
    });

    document.getElementById('print2').innerHTML = str;
})