const userModel = require('../models/userModel')

class UserService {
    async getOneUser(discordId) {
        const user = await userModel.findOne({discordId})
        return user;
    }

    async updateUser(discordId,params) {
        const user = await userModel.findOneAndUpdate({discordId},{...params})
        return user;
    }

    async deleteUser(discordId) {
        const user = await userModel.findOneAndDelete({discordId})
        return user;
    }

    async getAllUsers() {
        const users = await userModel.find()
        return users;
    }
}

module.exports = new UserService();