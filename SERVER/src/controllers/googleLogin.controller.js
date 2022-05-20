const express = require('express')
const {OAuth2Client} = require('google-auth-library');
const { newToken } = require('../middleware/token');

const User = require('../models/user.model');
const router = express.Router()

const CLIENT_ID = `155090589337-6ur9el9q6iud4j2kub2coleidgqcvspd.apps.googleusercontent.com`
const client = new OAuth2Client(CLIENT_ID);


async function verify(token) {
    
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  const profile = {
      email : payload.email,
      picture : payload.picture,
      name : payload.name
  }
  return profile
}

router.post('/signin', async(req, res)=>{
    try {
        const token = req.body.tokenId
        let profile
        try {
            profile = await verify(token)
        } catch (error) {
            console.log({message : error.message})
            return res
            .send({
                status : "failure"
            })
        }
        console.log(profile)
        let userFound = await User.findOne({ email : profile.email}).lean().exec()
        if(userFound)
        {
            return res
            .status(200)
            .send({
                status : 'success',
                username : profile.email.split('@')[0],
                name : profile.name,
                avatar : profile.picture,
                token : newToken(user),
            })
        }
        
        let user = {
            name : profile.name,
            email : profile.email,
            username : profile.email.split('@')[0],
            avatar : profile.picture,
        }
        user = await User.create(user)

        return res
        .status(200)
        .send({
            status : 'success',
            token : newToken(user),
            username : profile.email.split('@')[0],
            avatar : profile.picture,
            name : profile.name
        })
    } catch (error) {
        return res
        .status(500)
    }
})


module.exports = router


