const axios = require('axios')

class SuperHerosController {
    static async findByName(req, res) {
        try {
            const response = await axios.get(`https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}`);
        } catch (err) {
            
        }
    }
}

module.exports = SuperHerosController