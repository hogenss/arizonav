const { Schema, model} = require('mongoose')

const sessionSchema = new Schema({
    _id: String,
    session: String,
    expires: Date,
    lastModified: Date
})

module.exports = model('sessions', sessionSchema)