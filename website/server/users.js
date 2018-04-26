var express = require('express');
var router = express.Router();

var db = require("../config/db");


router.get("/",function(req,res,next){
    db.query("select * from userinfo",function(err,rows){
        if(err){
            res.render("users",{title:"User List",datas:[]});
        }else {
            res.render("users",{title:"User List",datas:rows});
        }
    });
});


router.get("/add",function(req,res,next){
    res.render("add");
});
router.post("/add",function(req,res,next){
    var name = req.body.name;
    var age = req.body.age;
    db.query("insert into user(name,age) values('"+name+"','"+ age +"')",function(err,rows){
        if(err){
            res.send("Fail to add new user"+err);
        }else {
            res.redirect("/users");
        }
    });
});


router.get("/del/:id",function(req,res){
    var id = req.params.id;
    db.query("delete from user where id = " + id,function(err,rows){
        if(err){
            res.send("Fail to delete"+err);
        }else {
            res.redirect("/users");
        }
    });
});


router.get("/toUpdate/:id",function(req,res,next){
    var id = req.params.id;
    var sql = "select * from user where id = " + id;
    console.log(sql);
    db.query(sql,function(err,rows){
        if(err){
            res.send("Error");
        }else {
            res.render("update",{datas:rows});
        }
    });
});

router.post("/update",function(req,res,next){
    var id = req.body.id;
    var name = req.body.name;
    var age = req.body.age;
    var sql = "update user set name = '"+ name +"',age = '"+ age +"' where id = " + id;
    console.log(sql);
    db.query(sql,function(err,rows){
        if(err){
            res.send("Fail to change " + err);
        }else {
            res.redirect("/users");
        }
    });
});



router.post("/search",function(req,res,next){
    var name = req.body.s_name;
    var age = req.body.s_age;
    var sql = "select * from user";
    if(name){
        sql += " where name = '"+ name +"'";
    }


    sql.replace("and","where");
    db.query(sql,function(err,rows){
        if(err){
            res.send("Error: "+err);
        }else{
            res.render("users",{title:"User List",datas:rows,s_name:name,s_age:age});
        }
    });
})

module.exports = router;
