var LocalStrategy = require("passport-local").Strategy;
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);

module.exports = function(passport) {
 passport.serializeUser(function(user, done){
  done(null, user.id);
 });

 passport.deserializeUser(function(id, done){
  connection.query("SELECT * FROM users WHERE id = ? ", [id],
   function(err, rows){
    done(err, rows[0]);
   });
 });

 passport.use(
  'local-signup',
  new LocalStrategy({
   emailField : 'email',
   passwordField: 'password',
   passReqToCallback: true
  },
  function(req, email, password, done){
   connection.query("SELECT * FROM users WHERE email = ? ", 
   [email], function(err, rows){
    if(err)
     return done(err);
    if(rows.length){
     return done(null, false, req.flash('signupMessage', 'That is already taken'));
    }else{
     var newUserMysql = {
      email: email,
      password: bcrypt.hashSync(password, null, null)
     };

     var insertQuery = "INSERT INTO users (email, password) values (?, ?)";

     connection.query(insertQuery, [newUserMysql.email, newUserMysql.password],
      function(err, rows){
       newUserMysql.id = rows.insertId;
      console.log(newUserMysql.id)

       return done(null, newUserMysql);
      });
    }
   });
  })
 );

 passport.use(
  'local-login',
   new LocalStrategy({
   emailField : 'email',
   passwordField: 'password',
   passReqToCallback: true
  },
  function(req, email, password, done){
   connection.query("SELECT * FROM users WHERE email = ? ", [email],
   function(err, rows){
    if(err)
     return done(err);
    if(!rows.length){
     return done(null, false, req.flash('loginMessage', 'No User Found'));
    }
    if(!bcrypt.compareSync(password, rows[0].password))
     return done(null, false, req.flash('loginMessage', 'Wrong Password'));

    return done(null, rows[0]);
   });
  })
 );
};