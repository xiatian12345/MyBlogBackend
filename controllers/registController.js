const {registService} = require('../services');
const {error,success} = require('../types');

const controller = async (req,res)=>{
    try{
        let registResult = await registService(req.body);
        res.status(200).json(registResult);
    }catch(e){
        res.status(500).json(error.serviceError.internal_error);
    }
};

module.exports = controller;