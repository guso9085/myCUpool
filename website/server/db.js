var mysql = require("mysql");
var pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Winterpark1$",
    database:"mycupool"
});

function query(sql,callback){
    pool.getConnection(function(err,connection){

          if(err) console.log("POOL ==> " + err);
        else{
            connection.query(sql,function(err,rows){
                callback(err,rows);
                connection.release();

            });
        }

    });
}

exports.query = query;
