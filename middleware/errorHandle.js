const {consola} = require('consola');
const {error} = require('../types');

const handle = function(err, req, res, next) {
    consola.error(err);
    res.status(500).send(error.serviceError.internal_error)
}

module.exports = handle;