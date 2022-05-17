const { Schema, model, default: mongoose } = require('mongoose')

const blogSummariesSchema = new Schema(
    {
        userId : { type : mongoose.Schema.Types.ObjectId, required : true},
        blog : {
                title: { type : String},
                image: { type : String},
                body : { type : String}
            }
    },
    {
        versionKey : false,
        timestamps : true
    }
)

module.exports = model('blogSummary', blogSummariesSchema)
