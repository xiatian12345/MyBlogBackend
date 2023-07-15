const {loginDb} = require('../dbs');
const {error,success} = require('../types');
const {jwtAuth} = require('./serve');

const service = async (body)=>{
    if(!body.userName || !body.password){
        return error.clientError.loginError.name_password_notexist;
    }

    try{
        let result = await loginDb(body);
        if(result){
            //登录成功后将认证的jwt token发送给客户端
            const jwtToken = await jwtAuth({userName:body.userName});
            return {...success.loginSuccess,jwtToken};
        }else{
            return error.clientError.loginError.name_password_invalid;
        }
    }catch(e){
        return error.serviceError.internal_error;
    }
}

module.exports = service;