const ApiError = require('../exceptions/api-error')

module.exports = function (req, res, next) {
    try {
        const user = req.user
        if (!user){
            return next(ApiError.UnathorizedError())
        }
        req.user = user
        next()
    } catch (e) {
        next(ApiError.UnathorizedError())
    }
}