const autoBind = require("auto-bind");
const {AuthService} = require('./auth.service');
class AuthController{
    #service;
    constructor(){
        autoBind(this);
        this.#service = AuthService;
    }

    async sendOtp(req,res,next){
        try{
            const {mobile} = req.body;
            const result = await this.#service.sendOtp(mobile);
            res.status(200).json({
                status:200,
                success:true,
                message:"Otp sent successfully!",
                data:{
                    mobile: result.mobile
                }
            });
        }catch(err){
            next(err);
        }
    }
}

module.exports ={
    AuthController : new AuthController()
}