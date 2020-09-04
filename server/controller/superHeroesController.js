const axios = require('axios')

class SuperHerosController {
    static async findByName(req, res) {
        try {
            const response = await axios.get(`https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}`);
        } catch (err) {
            res.status(err.response.status).json({ error : err.response.statusText })
        } 
    }
}

module.exports = SuperHerosController