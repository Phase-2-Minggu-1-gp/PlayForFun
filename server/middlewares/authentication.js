const { User } = require('../models');
const { decodeToken } = require('../helpers/jwt');

async function authentication (req, res, next) {
    try {
        const { token } = req.headers;
        if(!token) throw ({ msg : 'authentication failed', status : 401 })
        else {
            const decoded = decodeToken(token);
            console.log(decoded)
            const user = await User.findOne({
                where : {
                    email : decoded.email
                }
            })

            if(!user) throw ({ msg : 'authentication failed', status : 401 })
            else {
                req.loggedInUser = decoded;
                next();
            }
        }
    } catch (err) {
        console.log(err);
        let error = err.msg || 'invalid server error';
        let status = err.status || 500;
        res.status(status).json({ error });
    }
}

module.exports = authentication