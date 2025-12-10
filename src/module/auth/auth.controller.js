const autoBind = require("auto-bind");
class AuthController{
    constructor(){
        autoBind(this);
    }
}

module.exports ={
    AuthController : new AuthController()
}