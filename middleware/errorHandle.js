const {consola} = require('consola');
const {error} = require('../types');

const handle = function(err, req, res, next) {
    consola.error(err);
    if (err.name === 'UnauthorizedError') {//jwt 认证
        res.status(401).send(error.clientError.authError);
        return;
      }
    res.status(500).send(error.serviceError.internal_error);
}

module.exports = handle;