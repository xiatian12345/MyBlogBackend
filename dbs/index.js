const foo = require('./foo');
const bar = require('./bar');
const loginDb = require('./loginDb');

const mongo = require('../dbs/mongo');

module.exports = {
    foo,
    bar,
    loginDb,
    address:mongo.config.address
}