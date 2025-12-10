const autoBind = require("auto-bind");
class AuthService{
    constructor(){
        autoBind(this);
    }
}
module.exports ={
    AuthService : new AuthService()
}