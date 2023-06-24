const sessionService = require('../service/sessionService')

class SessionController {

    async deleteSessions(req, res, next) {
        try {
            const sessions = await sessionService.getSessions();

            const params = req.body;
            const { user } = params;

            sessions.forEach(async e => {
                if(JSON.parse(e.session).passport.user.id === user)
                {
                    const session = await sessionService.deleteSession(e._id);
                    return res.json(session);
                }
            })
        } catch (e) {
            next(e);
        }
    }

}

module.exports = new SessionController();