const foo = require('./foo');
const bar = require('./bar');
const loginDb = require('./loginDb');
const registDb = require('./registDb');

const mongo = require('../dbs/mongo');

module.exports = {
    foo,
    bar,
    loginDb,
    registDb,
    address:mongo.config.address
}