const axios = require('axios');
const randomNum = require('../helpers/random');
const { SuperHero } = require('../models')

class SuperHerosController {
    static async getRandom(req, res) {
        try {
            const response = await axios.get(`https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}/${randomNum(731)}`);
            res.status(200).json({ data : response.data })
        } catch (err) {
            res.status(err.response.status).json({ error : err.response.statusText })
        } 
    }

    static async getByName(req, res) {
        try {
            const name = req.params.name
            const response = await axios.get(`https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}/search/${name}`);
            res.status(200).json({ data : response.data })
        } catch (err) {
            res.status(err.response.status).json({ error : err.response.statusText })
        } 
    }

    static async getNames(req, res){
        try {
            const data = await SuperHero.findAll()
            if(!data || data.length === 0) throw ({ msg : 'data not found', status : 404 });
            res.status(200).json({ data })
        } catch (err) {
            res.status(500).json({ error : err })
        }
    }
}

module.exports = SuperHerosController