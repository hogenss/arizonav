const sessionService = require('../service/sessionService')

class SessionController {

    async deleteSessions(req, res, next) {
        try {
            const params = req.body
            const { user } = params
            const form = await sessionService.deleteSessions(user)
            return res.json(form)

        } catch (e) {
            next(e)
        }
    }

}

module.exports = new SessionController();