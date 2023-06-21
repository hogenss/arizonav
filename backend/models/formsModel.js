const { Schema, model} = require('mongoose')

const formsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref:  'User'
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