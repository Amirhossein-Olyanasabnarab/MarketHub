const autoBind = require("auto-bind");
const {UserModel} = require('../user/user.model');
class AuthService{
    #model;
    constructor(){
        autoBind(this);
        this.#model = UserModel;
    }

    async sendOtp(mobile){
        const user = await this.existByMobile(mobile);

        const now = new Date().getTime();
        const otp = {
            code: Math.floor(1000 + Math.random() * 9000),
            expireIn: now + (1000 * 60 * 2) // 2 minutes
        };
       
        if(!user){
            const newUser = await this.#model.create({mobile,otp});
            return newUser;
        }

        if(user.otp && user.expireIn > now){
            throw {status:400,message:"You can request new otp after 2 minutes!"};
        }

        user.otp = otp;
        await user.save();
        return user;
    }

    async checkExistByMobile(mobile){
        const user = await this.#model.findOne({mobile});
        if(!user) throw {status:404,message:"User not found!"};
        return user;
        
    }
}
module.exports ={
    AuthService : new AuthService()
}