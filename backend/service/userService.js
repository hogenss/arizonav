const userModel = require('../models/userModel')

class UserService {
    async getOneUser(discordId) {
        const user = await userModel.findOne({discordId})
        return user;
    }
    async updateUser(params) {
        const user = await userModel.findOneAndUpdate({...params})
        return user;
    }

    async getAllUsers() {
        const users = await userModel.find()
        return users;
    }
}

module.exports = new UserService();