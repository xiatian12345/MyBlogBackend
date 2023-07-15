const {loginDb} = require('../dbs');
const {error,success} = require('../types');

const service = async (body)=>{
    if(!body.userName || !body.password){
        return error.loginError.name_password_notexist;
    }

    try{
        let result = await loginDb(body);
        if(result){
            return success.loginSuccess;
        }else{
            return error.loginError.name_password_invalid;
        }
    }catch(e){
        return error.serviceError.internal_error;
    }
}

module.exports = service;