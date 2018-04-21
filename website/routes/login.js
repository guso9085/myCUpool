const express = require('express');
const app = express();

app.get('/registerUser', function(req, res, next) {
  req.getConnection(function(error, conn) {
    const {first, last, email, pass, phone} = req.query;
    sqlQuery_userInfo = `INSERT INTO userinfo (FirstName, LastName, Email, PasswordHash, PhoneNumber) VALUES ('${first}', '${last}', '${email}', password('${pass}'), '${phone}')`;
    conn.query(sqlQuery_userInfo, function(err, result) {
      if(err) {
        // Distplay error message in case of error
        res.send(err)
      }

      else {
        return res.send('successfully added user')
      }
    })
  })
})

module.exports = app
