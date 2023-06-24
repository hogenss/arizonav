const sessionSchema = require('../models/sessionModel')

class SessionService {
    async getSessions() {
        const sessions = await sessionSchema.find({})
        return sessions
    }

    async deleteSession(_id) {
        console.log(_id)
        const deleteSession = await sessionSchema.deleteOne({_id})
        return deleteSession
    }

}

module.exports = new SessionService();