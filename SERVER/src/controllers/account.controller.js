const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const newToken = (user)=>{
    return jwt.sign({ user}, "admin@media")
}

const signup = async (req, res, next)=>{
    try {
        let user = await User.findOne({username}).lean().exec()
        if(user)
            return res
            .status(400)
            .send(
                {
                    status : "failure",   
                    reason : "User already exits"
                }
            )
        console.log(req.body)
        return res.send({ status : "success"})
        user = await User.create(req.body)
        return res
        .status(201)
        .send({ status : 'success'})
    } catch (error) {
        return res
        .status(201)
        .send({ status : 'success'})
    }
}

const signin = async (req, res, next)=>{
    const user = await User.findOne({ email : req.body.email})
    if(user)
        return res
        .status(404)
        .send(
            {
                status : "failure",
                reason : 'User not found'
            }
        )
        const passwordMatch = user.checkPassword(req.body.password)
        if(!passwordMatch)
            return res
            .status(404)
            .send(
                {
                    status : "failure",
                    reason : 'Credentails are wrong.'
                }
            )
            const token = newToken(user)
        return res
        .status(200)
        .send(
            {
                status : "success",
                token
            }
        )
}

module.exports = { signin, signup, newToken}