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
    if(localStorage.token) {

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