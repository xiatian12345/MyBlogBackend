const {loginService} = require('../services');
const {error,success} = require('../types');

const controller = async (req,res)=>{
    try{
        let loginResult = await loginService(req.body);
        res.status(200).json(loginResult);
    }catch(e){
        res.status(500).json(error.serviceError.internal_error);
    }
};

module.exports = controller;