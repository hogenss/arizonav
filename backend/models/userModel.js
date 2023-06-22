const { Schema, model} = require('mongoose')

const userSchema = new Schema({
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
    points: {
        type: Number,
        default: 0
    },
    level: {
        type: Number,
        default: 0
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

module.exports = model('User', userSchema)