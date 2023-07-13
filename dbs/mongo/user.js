const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    userName:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    token:{
        type:String,
        required:false,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    createTime:{
        type:Date,
        required:true,
        default:false,
    },
});

const UserModel = mongoose.model('Users',UserSchema);

module.exports = UserModel;