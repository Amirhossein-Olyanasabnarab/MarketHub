const autoBind = require('auto-bind');
const UserModel = require('../user/user.model');
const createHttpError = require('http-errors');
const AuthMessage = require('./auth.message');

class AuthService{
    #model;
    constructor(){
        autoBind(this);
        this.#model = UserModel;
    }

    async sendOtp(mobile){
        const user = await this.#model.findOne({mobile});
        const now = new Date().getTime();
        const otp = {
            code: randomInt(10000, 99999),
            expiresIn: now + (1000 * 60 * 2)
        };
        if (!user) {
            const newUser = await this.#model.create({mobile, otp});
            return newUser;
        }
        if (user.otp && user.otp.expiresIn > now) {
            throw new createHttpError.BadRequest(AuthMessage.otpCodeNotExpired);
        }
        user.otp = otp;
        await user.save();
        return user;

    }

    async checkExistUserByMobile(mobile){
        const user = await this.#model.findOne({mobile});
        if(!user) throw new createHttpError.NotFound(AuthMessage.notFound);
        return user;
    }
}

module.exports = {
    AuthService : new AuthService()
}