module.exports = class ApiError extends  Error {
    status;
    errors;

    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnathorizedError() {
        return new ApiError(401, 'User unathorized')
    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors)
    }

    static UserNotAdmin() {
        return new ApiError(401, 'User not Admin')
    }
}