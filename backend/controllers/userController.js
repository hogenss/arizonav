const userService = require('../service/userService')
const ApiError = require("../exceptions/api-error");

class UserController {

    async user(req, res, next) {
        try {
            const user = req.user
            if (!user){
                return next(ApiError.UnathorizedError())
            }
            console.log(user)
            const newUser = await userService.getOneUser(user.discordId)
            return res.json(200, newUser)
        } catch (e) {
            next(e)
        }
    }


    async updateUser(req, res, next) {
        try {
            const params = req.body
            const { discordId } = params
            const userData = await userService.updateUser(discordId, params)
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async getUsers(req, res, next) {
        try {
            const users = await userService.getAllUsers()
            return res.json(users)
        } catch (e) {
            next(e)
        }
    }

}

module.exports = new UserController()