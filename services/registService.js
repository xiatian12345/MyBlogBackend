const {registDb} = require('../dbs');
const {error,success} = require('../types');

const service = async (body)=>{
    if(!body.userName || !body.password || !body.mailAddress){
        return error.clientError.loginError.name_password_notexist;
    }

    try{
        let result = await registDb(body);
        if(result){
            return success.registSuccess;
        }else{
            return error.clientError.registError.name_already_exist;
        }
    }catch(e){
        return error.serviceError.internal_error;
    }
}

module.exports = service;