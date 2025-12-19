const { AuthController } = require('./auth.controller');

const router = require('express').Router();

router.post("/send-otp", AuthController.sendOtp);

module.exports = {
    AuthRouter : router
}