import $api from "../http";

export default class FormService {
    static async sendForm(user, discordId, discordTag, nickname, avatar, task, progress, proofs) {
        return $api.put('/form/create', {user, discordId, discordTag, nickname, avatar, task, progress, proofs})
    }

    static async deleteForm(_id) {
        return $api.put('/form/delete', {_id})
    }

    static async updateUser(discordId, points) {
        return $api.put('/user/update', {discordId, points})
    }
}