const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    code: {type:String, required: false, default: ''},
    expiresAt: {type: Number, required: false, default: 0}
});

const userSchema = new mongoose.Schema({
    fullName: {type: String, required: false},
    mobile: {type: String, required: true, unique: true},
    otp:{type: otpSchema},
    verifiedMobile: {type: Boolean, required: true, default: false},
}, {
    timestamps: true
});

const UserModel = mongoose.model('User', userSchema);
module.exports = {
    UserModel
}