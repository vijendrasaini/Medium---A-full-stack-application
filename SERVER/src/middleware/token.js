const jwt = require('jsonwebtoken')

const newToken = (user)=>{
    return jwt.sign({ user}, "admin@medium.org")
}

module.exports = { newToken}
