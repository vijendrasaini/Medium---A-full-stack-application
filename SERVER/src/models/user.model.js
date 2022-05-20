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


userSchema.pre('save', function(next){
    if(!this.isModified('password')) 
        next()
    this.password = hashSync(this.password)
    next()
})

userSchema.methods.checkPassword = function(password){
    return compareSync(password, this.password)
}

module.exports = model('user', userSchema)
