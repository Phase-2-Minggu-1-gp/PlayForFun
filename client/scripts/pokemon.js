let pokeUrl = 'http://localhost:3000'

function menuUtama(){
    fetchPokemon(event)
    $('#grass-page').hide()   
    $('#water-page').hide() 
    $('#psychic-page').hide()
    $('#lighting-page').hide()
    $('#pokemon-page').show()
    
}

function pilihGrass(){
    grass(event)
    $('#grass-page').show()
    $('#pokemon-page').hide()
    $('#water-page').hide()  
    $('#psychic-page').hide()
    $('#lighting-page').hide()
}

function pilihWater(){
    water(event)
    $('#water-page').show()
    $('#pokemon-page').hide()
    $('#grass-page').hide() 
    $('#psychic-page').hide()
    $('#lighting-page').hide()
}


function pilihPsychic(){
    psychic(event)
    $('#water-page').hide()
    $('#pokemon-page').hide()
    $('#grass-page').hide() 
    $('#psychic-page').show()
    $('#lighting-page').hide()
}
function pilihLighting(){
    lighting(event)
    $('#water-page').hide()
    $('#pokemon-page').hide()
    $('#grass-page').hide() 
    $('#psychic-page').hide()
    $('#lighting-page').show()
}


function grass(event){
    event.preventDefault()

    $.ajax({
        url: `${pokeUrl}/pokemon/list/grass`,
        method: 'get',
        headers: {
            token: localStorage.token
        }
    })
    .done(data =>{
        console.log(data) 
                       
        $('#grass-container').empty()
        data.pokemon.forEach(pokemon =>{
            // console.log(pokemon)
            $('#grass-container').append(`
            <div class="gallery" style="height:300px; width:200px;" >
            <a href="" class="pop">
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

function water(event){

    event.preventDefault()
    $.ajax({
        url: `${pokeUrl}/pokemon/list/water`,
        method: 'get',
        headers: {
            token: localStorage.token
        }
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

function psychic(event){
    event.preventDefault()
    $.ajax({
        url: `${pokeUrl}/pokemon/list/psychic`,
        method: 'get',
        headers: {
            token: localStorage.token
        }
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

function lighting(event){
    event.preventDefault()
    $.ajax({
        url: `${pokeUrl}/pokemon/list/lighting`,
        method: 'get',
        headers: {
            token: localStorage.token
        }
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



function fetchPokemon(event) {
    event.preventDefault()
    $('#grass-page').hide()   
    $('#water-page').hide() 
    $('#psychic-page').hide()
    $('#lighting-page').hide()
   
   
    $.ajax({
        url: `${pokeUrl}/pokemon/list`,
        method: 'get',
        headers: {
            token: localStorage.token
        }
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


