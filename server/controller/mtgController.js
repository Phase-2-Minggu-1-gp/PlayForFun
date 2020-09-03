const axios = require('axios')

class MtgController {
    static showCards (req, res, next) {
        // https://api.magicthegathering.io/v1/cards
        axios.get('https://api.magicthegathering.io/v1/cards')
        .then(response => {
            let cards = response.data.cards
            res.status(200).json({cards})
        })
        .catch(err => {
            console.log(err);
        })
        .then(function () {
        });
    }

    static showCardById (req, res, next) {
        // https://api.magicthegathering.io/v1/cards/${req.params.id}
        let url = `https://api.magicthegathering.io/v1/cards/${req.params.id}`
        axios.get(url)
        .then(response => {
            let card = response.data.card
            res.status(200).json({card})
        })
        .catch(err => {
            console.log(err);
        })
        .then(() => {
        });
    }
}

module.exports= MtgController
