const { connect, connection } = require('mongoose');

console.log('Hit Connections')

connect('mongodb://127.0.0.1:27017/roster_db');

module.exports = connection;