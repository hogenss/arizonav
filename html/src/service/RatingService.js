import $api from "../http";

export default class RatingService {
    static async updateUser(discordId, level, points) {
        return $api.put('/user/update', {discordId, level, points})
    }

    static async deleteUser(discordId) {
        return $api.put('/user/delete', {discordId})
    }
}