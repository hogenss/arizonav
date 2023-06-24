import $api from "../http";

export default class SessionService {
    static async deleteSessions(user) {
        return $api.put('/session/delete', {user})
    }
}