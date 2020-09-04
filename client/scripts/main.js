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
    .fail(err => {
        $('#errors').empty().append(JSON.stringify(err.responseJSON.error)).show().fadeOut(2000)
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