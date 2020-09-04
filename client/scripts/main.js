let baseUrl = 'http://localhost:3000'

$( document ).ready(function() {
    $('a').click(function(event){
        event.preventDefault();
    })
    $('form').submit(function(event){
        event.preventDefault();
    })
    auth()
});

function auth() {
    $('#login').hide()
    $('#register').hide()
    $('#errors').hide()
    $('#success').hide()
    $('#navbar').hide()
    $('#home').hide()
    $('#superhero-container').hide()

    $('#mtg').hide()

    //pokemon
    $('#pokemon-page').hide()
    $('#grass-page').hide()
    $('#water-page').hide()
    $('#psychic-page').hide()
    $('#lighting-page').hide()


    if(localStorage.token) {
        $('#navbar').show()
        $('#home').show()
    } else {
        $('#login').show()
    }
}


function showRegister(){
    $('#register').show()
    $('#login').hide()
}

function cancel(){
    auth()
}

function login() {
    const email = $('#login-email').val();
    const password = $('#login-password').val();
    $.ajax({
        url : `${baseUrl}/users/login`,
        method : 'post',
        data : {
            email,
            password
        }
    })
    .done(data => {
        localStorage.setItem('token', data.token)
        auth()
    })
    .fail(err => {
        $('#errors').empty().append(err.responseJSON.error).show()
    })
    .always(_=> {
        $('input').val("");
    })
}

function register() {
    const email = $('#register-email').val();
    const password = $('#register-password').val();
    $.ajax({
        url : `${baseUrl}/users/register`,
        method : 'post',
        data : {
            email,
            password
        }
    })
    .done(data => {
        $('#success').empty().append(`
        ${data.msg}<br>
        ${data.user.email}
        `).show().fadeOut(3000);
        auth()
    })
    .fail(err => {
        $('#errors').empty()
        if(err.errors) {
            err.errors.forEach(item => {
                console.log(item.message)
                $('#errors').append(`${item.message} `)
            })
        }
        $('#errors').show()
    })
    .always(_=> {
        $('input').val("");
    })
}


function logout () {
    localStorage.clear()
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

function onSignIn(googleUser) {
    let id_token = googleUser.getAuthResponse().id_token;
    // console.log(id_token)
    $.ajax({
        url: `${baseUrl}/users/googlesign`,
        method: 'post',
        data: {
            id_token
        }
    })
    .done(data => {
        console.log(data)
        localStorage.setItem('token', data.token)
    })

    .fail(err => {
        console.log(err)
    })

    .always(() => {

    })
}



function superhero(){
    $('#home').hide()
    $('#superhero-container').show()
    $('#mtg').hide()
    // fill datalist
    $.ajax({
        url : `${baseUrl}/superheroes/all`,
        method : 'get',
        headers : localStorage.token
    })
    .done(data => {
        $('#list-superhero-name').empty();
        data.data.forEach(item => {
            $('#list-superhero-name').append(`<option value="${item.name}">`)
        })  
    })
}


function mtg () {
    $('#mtg').show()
    $('#home').hide()
    $('#superhero-container').hide()
    $('#landing-page').show()
}

// all cards pokemon
function fetchPokemon(event) {
    event.preventDefault()
    $('#grass-page').hide()   
    $('#water-page').hide() 
    $('#psychic-page').hide()
    $('#lighting-page').hide()
    $('#login').hide()
    $('#register').hide()
    $('#errors').hide()
    $('#success').hide()
    $('#navbar').hide()
    $('#home').hide()
    $('#superhero-container').hide()
    $('#pokemon-page').show()
    $('#navbar').show()
   
    $.ajax({
        url: `${baseUrl}/pokemon/list`,
        method: 'get',
        headers : localStorage.token
    })
        .done(data =>{
            // console.log(data)               
            $('#pokemon-container').empty()
            data.pokemon.forEach(pokemon =>{
                // console.log(pokemon)
                $('#pokemon-container').append(`
                <div class="gallery" style="height:300px; width:200px;" >
                <a target="_blank" >
                    <img onclick="" src="${pokemon.imageUrl}" alt="noimage" width="600" height="auto">
                </a>
                <div class="desc">${pokemon.name}</div>
                </div>
            
                `)
            })
        })
        .fail(error => {
            console.log(error.responseJSON , `gagal <<<<<<<`)
        })
}

//pokemon grass
function grass(event){
    event.preventDefault()
    $('#grass-page').hide()   
    $('#water-page').hide() 
    $('#psychic-page').hide()
    $('#lighting-page').hide()
    $('#login').hide()
    $('#register').hide()
    $('#errors').hide()
    $('#success').hide()
    $('#navbar').hide()
    $('#home').hide()
    $('#superhero-container').hide()
    $('#pokemon-page').hide()
    $('#grass-page').show()
    $('#navbar').show()
    $.ajax({
        url: `${baseUrl}/pokemon/list/grass`,
        method: 'get',
        headers : localStorage.token
    })
    .done(data =>{
        console.log(data) 
                       
        $('#grass-container').empty()
        data.pokemon.forEach(pokemon =>{
            // console.log(pokemon)
            $('#grass-container').append(`
            <div class="gallery" style="height:300px; width:200px;" >
            <a target="_blank" >
                <img onclick="" src="${pokemon.imageUrl}" alt="noimage" width="600" height="auto">
               
            </a>
            <div class="desc">${pokemon.name}</div>
            </div>
        
            `)
        })
    })
    .fail(error => {
        console.log(error.responseJSON , `gagal <<<<<<<`)
    })
}

//pokemon water

function water(event){
    event.preventDefault()
    $('#grass-page').hide()   
    $('#water-page').hide() 
    $('#psychic-page').hide()
    $('#lighting-page').hide()
    $('#login').hide()
    $('#register').hide()
    $('#errors').hide()
    $('#success').hide()
    $('#navbar').hide()
    $('#home').hide()
    $('#superhero-container').hide()
    $('#pokemon-page').hide()
    $('#grass-page').hide()
    $('#water-page').show()
    $('#navbar').show()
    $.ajax({
        url: `${baseUrl}/pokemon/list/water`,
        method: 'get',
        headers : localStorage.token
    })
    .done(data =>{
        // console.log(data) 
        $('#water-container').empty()     
        data.pokemon.forEach(pokemon =>{
            console.log(pokemon)
            $('#water-container').append(`
            <div class="gallery" style="height:300px; width:200px;" >
            <a target="_blank" >
                <img onclick="" src="${pokemon.imageUrl}" alt="noimage" width="600" height="auto">
               
            </a>
            <div class="desc">${pokemon.name}</div>
            </div>
        
            `)
        })
    })
    .fail(error => {
        console.log(error.responseJSON , `gagal <<<<<<<`)
    })
}

//pokemon psychic

function psychic(event){
    event.preventDefault()
    $('#grass-page').hide()   
    $('#water-page').hide() 
    $('#psychic-page').hide()
    $('#lighting-page').hide()
    $('#login').hide()
    $('#register').hide()
    $('#errors').hide()
    $('#success').hide()
    $('#navbar').hide()
    $('#home').hide()
    $('#superhero-container').hide()
    $('#pokemon-page').hide()
    $('#grass-page').hide()
    $('#water-page').hide()
    $('#psychic-page').show()
    $('#navbar').show()
    $.ajax({
        url: `${baseUrl}/pokemon/list/psychic`,
        method: 'get',
        headers : localStorage.token
    })
    .done(data =>{
        // console.log(data) 
        $('#psychic-container').empty()     
        data.pokemon.forEach(pokemon =>{
            console.log(pokemon)
            $('#psychic-container').append(`
            <div class="gallery" style="height:300px; width:200px;" >
            <a target="_blank" >
                <img onclick="" src="${pokemon.imageUrl}" alt="noimage" width="600" height="auto">
               
            </a>
            <div class="desc">${pokemon.name}</div>
            </div>
        
            `)
        })
    })
    .fail(error => {
        console.log(error.responseJSON , `gagal <<<<<<<`)
    })

    
}

// pokemon lighting

function lighting(event){
    event.preventDefault()
    $('#grass-page').hide()   
    $('#water-page').hide() 
    $('#psychic-page').hide()
    $('#lighting-page').hide()
    $('#login').hide()
    $('#register').hide()
    $('#errors').hide()
    $('#success').hide()
    $('#navbar').hide()
    $('#home').hide()
    $('#superhero-container').hide()
    $('#pokemon-page').hide()
    $('#grass-page').hide()
    $('#water-page').hide()
    $('#psychic-page').hide()
    $('#lighting-page').show()
    $('#navbar').show()
    $.ajax({
        url: `${baseUrl}/pokemon/list/lighting`,
        method: 'get',
        headers : localStorage.token
    })
    .done(data =>{
        // console.log(data) 
        $('#lighting-container').empty()     
        data.pokemon.forEach(pokemon =>{
            console.log(pokemon)
            $('#lighting-container').append(`
            <div class="gallery" style="height:300px; width:200px;" >
            <a target="_blank" >
                <img onclick="" src="${pokemon.imageUrl}" alt="noimage" width="600" height="auto">
               
            </a>
            <div class="desc">${pokemon.name}</div>
            </div>
        
            `)
        })
    })
    .fail(error => {
        console.log(error.responseJSON , `gagal <<<<<<<`)
    })

}

function superHeroSearchByName() {
    let name = $('#search-superhero-name').val()
    $.ajax({
        url : `${baseUrl}/superheroes/${name}`,
        method : 'get',
        headers : localStorage.token
    })
    .done(data => {
        let all = data.data.results[0];
        let bio = all.biography;
        let stat = all.powerstats;
        console.log(bio)
        $('#superhero-profile').empty().append(`
            <div class="d-flex flex-column text-center">
                <div class="p-2" style="height: 250px;">
                    <div style="float:left; width:20%; height: 100%; background: url(${all.image.url}); background-size: cover;">
                    </div>
                    <div style="float:left; width:80%; margin:20px auto" class="text-center">
                        <h3>${all.name}</h3>
                    </div>
                </div>
                <div class="p-2 text-left">
                    <h4 >Biography</h4>
                    <table class="table table-sm">
                        <tbody>
                            <tr>
                                <td>Full Name</td>
                                <td>${bio["full-name"]}</td>
                            </tr>
                            <tr>
                                <td>Aliases</td>
                                <td>${bio.aliases.join(', ')}</td>
                            </tr>
                            <tr>
                                <td>Place of birth</td>
                                <td>${bio["place-of-birth"]}</td>
                            </tr>
                            <tr>
                                <td>First appearance</td>
                                <td>${bio["first-appearance"]}</td>
                            </tr>
                            <tr>
                                <td>Publisher</td>
                                <td>${bio.publisher}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                <div class="p-2 text-left">
                    <h4 >Power status</h4>
                    <table class="table table-sm">
                        <thead>
                        <tr>
                            <th scope="col">Intelligence</th>
                            <th scope="col">Strength</th>
                            <th scope="col">Speed</th>
                            <th scope="col">Durability</th>
                            <th scope="col">Power</th>
                            <th scope="col">Combat</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr style="font-weight:bold;">
                                <td>${stat.intelligence}</td>
                                <td>${stat.strength}</td>
                                <td>${stat.speed}</td>
                                <td>${stat.durability}</td>
                                <td>${stat.power}</td>
                                <td>${stat.combat}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `).show()
    })
    .fail(err => {
        $('#errors').empty().append(JSON.stringify(err)).show().fadeOut(2000)
    })
    .always(_=> {

    })
}

