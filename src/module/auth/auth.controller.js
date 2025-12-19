const autoBind = require('auto-bind');
const authService = require('./auth.service');
const {AuthMessage} = require('./auth.message');

class AuthController{
    #service;
    constructor(){
        autoBind(this);
        this.#service = authService;
    }

    async sendOtp(req, res, next){
        try{
            const {mobile} = req.body;
            await this.#service.sendOtp(mobile);
            return res.json({
               message: AuthMessage.sendOtpSuccessfully
            });

        }catch(error){
            next(error);
        }
    }
}

module.exports = {
    AuthController : new AuthController()
}