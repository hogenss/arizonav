const { Schema, model} = require('mongoose')

const formsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref:  'User'
    },
    discordId: {
        type: String,
        required: true,
        unique: true
    },
    discordTag: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String,
    },
    task: {
        type: String,
        required: true
    },
    progress: {
        type: String,
        required: true
    },
    proofs: {
        type: String,
        required: true
    }

})

module.exports = model('Forms', formsSchema)