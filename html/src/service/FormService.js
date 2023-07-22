import $api from "../http";

export default class FormService {
    static async sendForm(user, discordId, discordTag, nickname, avatar, points, task, progress, proofs) {
        return $api.put('/form/create', {user, discordId, discordTag, nickname, points, avatar, task, progress, proofs})
    }

    static async updateForm(_id, status) {
        return $api.put('/form/update', {_id, status})
    }

    static async updateUser(discordId, points) {
        return $api.put('/user/update', {discordId, points})
    }
}