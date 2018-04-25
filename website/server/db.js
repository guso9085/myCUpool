var mysql = require("mysql");
var pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Winterpark1$",
    database:"mycupool"
});

function query(sql,callback){
    pool.getConnection(function(err,connection){

        //connection.query(sql, function (err,rows) {
          if(err) console.log("POOL ==> " + err);
        else{
            connection.query(sql,function(err,rows){
                //释放连接
                callback(err,rows);
                connection.release();


                //事件驱动回调
                //callback(qerr,vals,fields);

            });
        }
            //callback(err,rows);
            //connection.release();
        //});
    });
}

exports.query = query;
