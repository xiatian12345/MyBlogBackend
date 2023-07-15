const {UserModel} = require('./mongo');

const login = (body)=>{
    return new Promise((res,rej)=>{
        UserModel.find({userName:body.userName,password:body.password}).then((list)=>{
            if(list.length > 0){
                res(true);
            }else{
                res(false);
            }
        }).catch(()=>{
            res(false);
        });
    });
}

module.exports = login;