"use strict"

const axios = require('axios')
const pokemon = require('pokemontcgsdk')

class PokemonController{
    static async showAll(req, res, next){
        try {
            const endpoint = `https://api.pokemontcg.io/v1/cards`
            const response = await axios.get(endpoint);
            
            let result = []

            response.data.cards.forEach(card =>{
                const {id, name, imageUrl, types, hp, attacks,weaknesses} = card
                result.push({
                    id,
                    name,
                    imageUrl,
                    types,
                    hp,
                    attacks,
                    weaknesses
                })
            })

            res.status(200).json({ pokemon: result })

            //  pokemon.card.all()
            //     .on('data', function (card) {
            //     // console.log(card.name)
            //      res.status(200).json({ pokemon: card })
            //     });

          } catch (error) {
            res.status(500).json({ error: error })
          }
    }

    static async listByTypeGrass(req, res, next){
        try {
            const endpoint = `https://api.pokemontcg.io/v1/cards`
            const response = await axios.get(endpoint);
            
            let result = []

            response.data.cards.forEach(card =>{
                const {id, name, imageUrl, types, hp, attacks,weaknesses} = card

                if(types == "Grass"){
                    result.push({
                        id,
                        name,
                        imageUrl,
                        types,
                        hp,
                        attacks,
                        weaknesses
                    })
                }
                
            })

            res.status(200).json({ pokemon: result })


          } catch (error) {
            res.status(500).json({ error: error })
          }   
    }

    static async listByTypeWater(req, res, next){
        try {
            const endpoint = `https://api.pokemontcg.io/v1/cards`
            const response = await axios.get(endpoint);
            
            let result = []

            response.data.cards.forEach(card =>{
                const {id, name, imageUrl, types, hp, attacks,weaknesses} = card

                if(types == "Water"){
                    result.push({
                        id,
                        name,
                        imageUrl,
                        types,
                        hp,
                        attacks,
                        weaknesses
                    })
                }
                
            })

            res.status(200).json({ pokemon: result })


          } catch (error) {
            res.status(500).json({ error: error })
          }   
    }

    static async listByTypePsychic(req, res, next){
        try {
            const endpoint = `https://api.pokemontcg.io/v1/cards`
            const response = await axios.get(endpoint);
            
            let result = []

            response.data.cards.forEach(card =>{
                const {id, name, imageUrl, types, hp, attacks,weaknesses} = card

                if(types == "Psychic"){
                    result.push({
                        id,
                        name,
                        imageUrl,
                        types,
                        hp,
                        attacks,
                        weaknesses
                    })
                }
                
            })

            res.status(200).json({ pokemon: result })


          } catch (error) {
            res.status(500).json({ error: error })
          }   
    }
    //Lightning
    static async listByTypeLightning(req, res, next){
        try {
            const endpoint = `https://api.pokemontcg.io/v1/cards`
            const response = await axios.get(endpoint);
            
            let result = []

            response.data.cards.forEach(card =>{
                const {id, name, imageUrl, types, hp, attacks,weaknesses} = card

                if(types == "Lightning"){
                    result.push({
                        id,
                        name,
                        imageUrl,
                        types,
                        hp,
                        attacks,
                        weaknesses
                    })
                }
                
            })

            res.status(200).json({ pokemon: result })


          } catch (error) {
            res.status(500).json({ error: error })
          }   
    }
}
module.exports = PokemonController