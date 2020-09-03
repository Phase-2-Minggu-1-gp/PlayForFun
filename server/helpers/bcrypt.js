const bcrypt = require('bcryptjs')

//function to hash
function hashPass (password) {
    let salt = bcrypt.genSaltSync(10);
    return hash = bcrypt.hashSync(password, salt);
}

function comparePass (password, hashedPass) {
    return bcrypt.compareSync(password, hashedPass);
}

module.exports = { hashPass, comparePass }
