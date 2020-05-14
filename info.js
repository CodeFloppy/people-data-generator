let btGenerate = document.getElementById('bt-generate');
let boxCap     = document.getElementById('box-cap');
let boxInfo    = document.getElementById('box-info');
let fullName   = document.getElementById('full-name');
let photo      = document.getElementById('photo');
let boxData    = document.getElementById('data');

let display = false;


btGenerate.addEventListener('click' , () => {
    
    fetch('https://randomuser.me/api/')

    .then(function(response){
        return response.json();
    })
    .then(function(data){

        let age     = data.results[0].dob.age;
        let cell    = data.results[0].cell;
        let email   = data.results[0].email;
        let city    = data.results[0].location.city;
        let country = data.results[0].location.country;
        let state   = data.results[0].location.state;
        let cPost   = data.results[0].location.postcode;

        fullName.innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
        photo.src = data.results[0].picture.large;

        infData(age , cPost, cell, email, city, country, state);

        // console.log(data.results[0]);
    });

    displayInfo();

});

boxCap.addEventListener('click' , () => {
    displayInfo();
});

function displayInfo(){
    
    if(display == false){
        boxCap.style.display  = "block";
        boxInfo.style.display = "block";
    }else{
        boxCap.style.display  ="none";
        boxInfo.style.display ="none";
    }
    display = !display;
}

function infData(age ,cPostal ,cell , email, city, country, state){
    boxData.innerHTML = `
    <li><span>Edad</span>: ${age}</li>
    <li><span>Localizacion</span>: ${city} - ${state} - ${country}</li>
    <li><span>Codigo postal</span>: ${cPostal}</li>
    <li><span>Celular</span>: ${cell}</li>
    <li><span>Email</span>: ${email}</li>`;
}



    
            