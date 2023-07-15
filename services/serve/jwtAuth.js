const jsonwebtoken = require('jsonwebtoken');
const consola = require('consola');

const generateToken = (data)=>{
    return new Promise((res)=>{
        jsonwebtoken.sign({
            ...data,
            issuer:'xiatian'
        }, process.env.SECRET_KEY, { expiresIn:'60s',algorithm:'HS256'},(err,result)=>{//如果是RS256会报错"secretOrPrivateKey must be an asymmetric key when using RS256" 
            if(err) consola.error(err);
            res([err,result]);
        });
    });
}

const jwtAuth = async (data)=>{
    let [err,result] = await generateToken(data);
    if(err) {
        return null;
    }else{
        return `Bearer ${result}`;//必须加上Bearer 否则express-jwt验证不通过
    }
}

module.exports = jwtAuth;