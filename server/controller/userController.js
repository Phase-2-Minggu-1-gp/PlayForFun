"use strict"
const { User } = require('../models')
const { generateToken } = require('../helpers/jwt')
const { comparePass } = require('../helpers/bcrypt')

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

}

module.exports = userController