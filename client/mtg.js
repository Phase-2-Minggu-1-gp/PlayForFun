const URL = "http://localhost:3000";

$( document ).ready(function() {
    allCards()
});



function allCards () {
    $.ajax({
        url: `${URL}/mtg/cards/`,
        method: 'get',
        headers: {
            token: localStorage.token
        }
    })

    .done(data => {
        // console.log(data)
        data.cards.forEach(card => {
            if (card.imageUrl) {
                $('#all-cards-container').append(`
                <div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${card.name}</h5>
                <p class="card-text">${card.rarity}</p>
                <img src="${card.imageUrl}" class="card-img-top" alt="...">
                </div>
              </div>
                `)
            }
        });
    })

    .fail(err => {
        console.log(err)
    })

    .always(() => {

    })
}

function findOne (event) {
    event.preventDefault();
    let id = $('#searchId').val()
    $.ajax({
        url: `${URL}/mtg/cards/${id}`,
        method: 'get'
    })

    .done(data => {
        console.log(data)
    })

    .fail(err => {
        console.log(err, 'search gagal')
    })

    .always(() => {
    })
}