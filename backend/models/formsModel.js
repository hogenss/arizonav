const { Schema, model} = require('mongoose')

const formsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref:  'User'
    },
    discordId: {
        type: String,
        required: true,
    },
    discordTag: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    points: {
        type: Number,
        default: 0
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
    },
    status: {
        type: String,
        default: 'Ожидание'
    }

})

module.exports = model('Forms', formsSchema)