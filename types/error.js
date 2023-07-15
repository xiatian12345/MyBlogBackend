const error = {
    clientError:{
        loginError:{
            name_password_notexist:{
                code:10000,
                message:'用户名或者密码不存在'
            },
            name_password_invalid:{
                code:10001,
                message:'用户名或者密码无效'
            }
        },
        registError:{
            name_already_exist:{
                code:10010,
                message:'注册失败，用户已存在'
            }
        },
        authError:{
            code:10020,
            message:'用户权限错误'
        }
    },
    serviceError:{
        internal_error:{
            code:11000,
            message:'服务器内部错误'
        }
    },

};


module.exports = error;