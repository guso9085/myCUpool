var mysql = require('mysql');


var db = require('../db.js');
var Str = require('../common/string');
moment = require('moment');
module.exports.getUsers = function(req, res, next) {
    let data = req.params;
	let sql = `select a.*,b.PasswordHash from userinfo a inner join userlogin b on b.UserId = a.UserId where a.UserId =  ${data.id}`;
	console.log(sql)
	db.query(sql, function(err, rows) {
		let info = {};
		let users = [];
		if(err!=undefined) {
			console.log(err);
			res.json({'status': 0, 'message': 'error'});
		}
		else {
			rows.forEach(item => {
                users.push({
					'id': item.UserID,
					'firstname': item.FirstName,
					'lastname': item.LastName,
					'phonenumber': item.PhoneNumber,
					'email': item.Email,
					'description': item.Description,
					'driver:': item.Driver,
					'password':item.PasswordHash
				})
			});
			info['users'] = users;


            console.log(info)
			res.json({'status': 1, 'info':  info });
		}
	})
}

module.exports.login = function(req, res, next) {
	let data = req.params;
	let dataJson =  JSON.parse(data.data);
	let email= dataJson.email;
  let password = dataJson.password;
	let sql = 'select * from userlogin where userlogin.LoginName = "'+email+'" and userlogin.PasswordHash = "'+password+'"';
console.log(sql);

	let users = [];
	db.query(sql, function(err, rows) {
		if(err) {
			res.json({"status": 0, "message": err});
		}
		else {
                       rows.forEach(item => {
                           users.push({
                               'id': item.UserID,
                               'password':item.PasswordHash
                           })
                       });
			res.json({"status": 1, "_info": users[0]});
		}
	})
}


module.exports.update = function(req, res, next) {
    let data = req.params;
    let dataJson =  JSON.parse(data.data).userinfo;
    console.log(dataJson)
    let email= dataJson.email;
    let password = dataJson.password;
    let phonenumber = dataJson.phonenumber;
    let lastname = dataJson.lastname;
    let id = dataJson.id;
    let firstname = dataJson.firstname;
    let driver = dataJson.driver;
    let description = dataJson.description;
    try{
        let sql = `update userlogin set PasswordHash ='${password}' where UserId ='${id}'`;
        db.query(sql, function(err, rows) {
            if(err) {
                res.json({"status": 0, "message": err});
            }
            else {
                let sql2 = `update userinfo set PhoneNumber ='${phonenumber}',Description ='${description}' where UserId ='${id}'`;
                db.query(sql2, function(err, rows) {
                    if(err) {
                        res.json({"status": 0, "message": err});
                    }
                    else {
                        res.json({"status": 1, "message": "success"});
                    }
                })
            }
        })
    }catch(e){
        res.json({"status": 0, "message": err});
        console.log(e);
    }
}


module.exports.regist = function(req, res, next) {
    let data = req.params;
    let dataJson =  JSON.parse(data.data);
    console.log(dataJson);
    let email =  dataJson.email;
    let password =  dataJson.password;
    let firstname =  dataJson.first_name;
    let lastname =  dataJson.last_name;
    //
    let sql = 'insert into userlogin(LoginName,PasswordHash,LastLogin) values("'+email+'","'+password+'","'+moment(new Date()).format('YYYY-MM-DD HH:mm:ss')+'")'
    db.query(sql, function(err, rows) {
        let sql2 = 'select * from userlogin where LoginName="'+email+'"'
        let users = [];
        db.query(sql2, function(err, rows) {
                rows.forEach(item => {
                    users.push({
                        'id': item.UserID,
                        'password':item.PasswordHash
                    })
                });
            let sql3 = 'insert into userinfo(UserId,FirstName,LastName,Email) values("'+users[0].id+'","'+firstname+'","'+lastname+'","'+email+'")'
            console.log(sql3);
            db.query(sql3, function(err, rows) {
                if(err) {
                    res.json({"status": 0, "message": err});
                }
                else {
                	let info = {
                        message:"success",
						userinfo:users[0]
					}
                    res.json({"status": 1, "info": info});
                }
            })
        })
    })
}

module.exports.addListing = function(req, res, next) {
  let data = req.params;
  let dataJson = JSON.parse(data.data);
  console.log(dataJson);
  let destination = dataJson.destination;
  let firstName = dataJson.firstName;
  let lastName = dataJson.lastName;
  let contact = dataJson.contact;
  let gasFee = dataJson.gasFee;
  let role = dataJson.value;
  let date = dataJson.date;
  let sql = 'INSERT INTO driverpost(Destination, FirstName, LastName, Contact, GasFee, Role, RideDate) VALUES("' + destination + '","' + firstName + '","' + lastName + '", "' + contact + '", "' + gasFee + '","' + role + '","' + date + '")'
  try {
    db.query(sql, function(err, rows) {
      if (err) {
        console.log(err);
        res.json({"status": 0, "message": err});
      } else {
        console.log("Success");
        res.json({"status": 1, "message": "success"});
      }
    })
  } catch(e) {
      res.json({"status": 0, "message": err});
      console.log(e);
  }
}

module.exports.getListings = function(req, res, next) {
	let sql = 'SELECT * FROM driverpost'
	db.query(sql, function(err, rows) {
		let info = {};
		let listings = [];
		if(err != undefined) {
			console.log(err);
			res.json({'status': 0, 'message': 'error'});
		}
		else {
			rows.forEach(item => {
        listings.push({
					'destination': item.Destination,
					'firstname': item.FirstName,
					'lastname': item.LastName,
					'contact': item.Contact,
					'date': item.RideDate,
					'gasFee': item.GasFee,
					'role':item.Role
			  })
			});
			info['listings'] = listings;
      console.log(info)
			res.json({'status': 1, 'info':  info });
		}
	})
}
