const {loginService} = require('../services');
const {error} = require('../types');

const controller = async (req,res)=>{
    try{
        let loginResult = await loginService(req.body);
        //将jwtToken放在cookie中
        res.cookie('jwtToken',loginResult.jwtToken);
        res.status(200).json(loginResult);
    }catch(e){
        res.status(500).json(error.serviceError.internal_error);
    }
};

module.exports = controller;