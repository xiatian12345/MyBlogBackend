const {loginService} = require('../services');
const {error} = require('../types');

const controller = async (req,res)=>{
    try{
        let loginResult = await loginService(req.body);
        res.status(200).send(loginResult.message);
    }catch(e){
        res.status(500).json(error.serviceError.internal_error);
    }
};

module.exports = controller;