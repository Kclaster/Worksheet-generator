let password = require('./config');


module.exports = {
    'connection':{
     'host':'localhost',
     'user':'root',
     'password': password
    },
    'database':'nodejs_login',
    'user_table':'user'
   }