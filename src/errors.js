module.exports.HMACAuthError = class HMACAuthError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        this.code = 'ERR_HMAC_AUTH_INVALID';
        Error.captureStackTrace(this, this.constructor);

        // provide an http status code 401 for all common error handling middlewares
        this.status = 401;
        this.statusCode = 401;
        this.status_code = 401;
    }
}