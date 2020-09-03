const URL = "http://localhost:3000";

$( document ).ready(function() {
    landing()
    allCards()
});

function landing () {
    $('#landing-page').show()
    $('#search-card-container').hide()
    $('#all-cards-container').hide()
}

function showSearch () {
    $('#landing-page').hide()
    $('#search-card-container').show()
    $('#all-cards-container').hide()
}

function showAll () {
    $('#landing-page').hide()
    $('#search-card-container').hide()
    $('#all-cards-container').show()
}

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
                $('#all-cards').append(`
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
        $('#one-card-container').empty()
        console.log(data)
        $('#one-card-container').append(`
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${data.card.name}</h5>
            <p class="card-text">${data.card.rarity}</p>
            <img src="${data.card.imageUrl}" class="card-img-top" alt="...">
            </div>
            </div>
        `)
    })

    .fail(err => {
        console.log(err, 'search gagal')
    })

    .always(() => {
    })
}