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