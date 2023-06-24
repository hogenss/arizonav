const formModel = require('../models/formsModel');

class SessionService {

    async deleteSessions(user) {
        const deleteSessions = await formModel.deleteMany({session: cookie.passport.user.id === user})
        return deleteSessions
    }

}

module.exports = new SessionService();