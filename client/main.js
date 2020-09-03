let baseUrl = 'http://localhost:3000'

$( document ).ready(function() {
    $('a').click(function(event){
        event.preventDefault();
    })
    $('form').submit(function(event){
        event.preventDefault();
    })
});

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

    })
    .fail(err => {
        console.log(err.responseJSON)
    })
    .always(_=> {
        $('input').val("");
    })
}

// function register() {
//     const email = $('#register-email').val();
//     const password = $('#register-password').val();
//     $.ajax({
//         url : `${baseUrl}/users/register`,
//         method : 'post',
//         data : {
//             email,
//             password
//         }
//     })
// }