const { Schema, model } = require('mongoose')

const userSchema = new Schema(
    {
        username: { type : String, required : true},
        name: { type : String, required : true},
        avatar : { type : String}
    },
    {
        versionKey : false
    }
)

module.exports = model('user', userSchema)
