class DiscordController {
    async discord(req, res, next) {
        try {
            res.send(200)
        } catch (e) {
            next(e)
        }
    }

    async redirectDiscord(req, res, next) {
        try {
            return res.redirect(process.env.CLIENT_URL)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new DiscordController()