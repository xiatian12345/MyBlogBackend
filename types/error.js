const error = {
    loginError:{
        name:{
            code:10000,
            message:'用户名错误'
        },
        password:{
            code:10001,
            message:'密码错误'
        },
        name_password_notexist:{
            code:10002,
            message:'用户名或者密码不存在'
        },
        name_password_invalid:{
            code:10003,
            message:'用户名或者密码无效'
        }
    },
    registError:{
        name_already_exist:{
            code:10010,
            message:'注册失败，用户已存在'
        }
    },
    serviceError:{
        internal_error:{
            code:11000,
            message:'服务器内部错误'
        }
    }
};


module.exports = error;