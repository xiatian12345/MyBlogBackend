const {UserModel} = require('./mongo');

const regist = (body)=>{
    return new Promise((res,rej)=>{
        UserModel.find({userName:body.userName}).then(async (list)=>{
            if(list.length > 0){
                res(false);
            }else{
                //插入
                await UserModel.create({ userName:body.userName,password:body.password,createTime:new Date(),mailAddress:body.mailAddress})
                res(true);
            }
        }).catch(()=>{
            res(false);
        });
    });
}

module.exports = regist;