let baseUrl = 'http://localhost:3000'

$(document).ready(function(){
   fetchTodos()
})

function fetchTodos() {
    $.ajax({
        url: `${baseUrl}/pokemon/list`,
        method: 'get',
    })
        .done(data =>{
            console.log(data) 
            $('#pokemongrass-page').hide()               
            $('#todo-container').empty()
            data.pokemon.forEach(todos =>{
                console.log(todos)
                $('#todo-container').append(`
                <div class="gallery" style="height:300px; width:200px;" >
                <a target="_blank" >
                    <img onclick="alert()" src="${todos.imageUrl}" alt="noimage" width="600" height="auto">
                   
                </a>
                <div class="desc">${todos.name}</div>
                </div>
            
                `)
            })
        })
        .fail(error => {
            console.log(error.responseJSON , `gagal <<<<<<<`)
        })
}

                // <div class="desc">${todos.name}</div>



