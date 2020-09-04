"use strict"
const { User } = require('../models')
const { generateToken } = require('../helpers/jwt')
const { comparePass } = require('../helpers/bcrypt')
const {OAuth2Client} = require('google-auth-library');

class userController{

    static async register(req, res, next){
        try {
            const { email, password } = req.body;
            const user = await User.create({
                email,
                password
            })
            res.status(200).json({
                msg : 'register success',
                user : {
                    id : user.id,
                    email : user.email
                }
            })
        } catch (err) {
            res.status(500).json({ err });
        }
    }

    static async login(req, res, next){
        try {
            const { email, password } = req.body;
            const user = await User.findOne({
                where : {
                    email
                }
            })
            if(!user) throw ({ msg : 'invalid email or password', status : 400 });
            let compareResult = comparePass(password, user.password);
            if(!compareResult) throw ({ msg : 'invalid email or password', status : 400 });
            const payload = {
                id : user.id,
                email : user.email
            }
            const token = generateToken(payload);
            res.status(200).json({ token });
        } catch (err) {
            console.log(err);
            let error = err.msg || 'invalid server error';
            let status = err.status || 500;
            res.status(status).json({ error });
        }
    }

    static googleSign (req, res, next) {
        let { id_token } = req.body
        let email = ''
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        client.verifyIdToken({
            idToken: id_token,
            audience: process.env.GOOGLE_CLIENT_ID
        })
        .then(ticket => {
            // console.log(ticket)
            const payload = ticket.getPayload()
            email = payload.email
            return User.findOne({
                where: {
                    email
                }
            })
        })
        .then (data => {
            // console.log(data)
            if (data) return data
            else {
                return User.create({
                    email,
                    password: 'google123456'
                })
            }
        })
        .then(data => {
            // console.log(data.dataValues)
            const token = generateToken({
                id: data.dataValues.id,
                email: data.dataValues.email
            })
            // console.log(token)
            res.status(200).json({token})
        })
        .catch(err => {
            console.log(err)
        })
    }
}

module.exports = userController