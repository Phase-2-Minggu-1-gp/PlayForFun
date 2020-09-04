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


function superhero(){
    $('#home').hide()
    $('#superhero-container').show()
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
