const autoBind = require("auto-bind");
const {UserModel} = require('../user/user.model');
class AuthService{
    #model;
    constructor(){
        autoBind(this);
        this.#model = UserModel;
    }

    async sendOtp(mobile){

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