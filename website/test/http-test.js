import sinon from 'sinon';
import {expect} from 'chai';
import React from 'react';
import {mount,shallow} from 'enzyme';
import fetch from 'node-fetch';

var regist_fname = 'zzz';
var regist_lname = 'rr2dsrrr';
var regist_email = 'niu23pi@qq.com';
var regist_pswd = 'zzzzz';

describe('http test',()=>{

    it('get userinfo test', function() {
        let id = 144;
        return fetch('http://localhost:3001/get-userinfo/'+id)
            .then(function(res) {
                return res.json();
            }).then(function(json) {
                // expect(json).to.be.an('object');
                expect(json.status).to.equal(1);
            });
    });

    it('login test', function() {
        let data = {
            email:'zzz@gmail.com',
            password:'dsaewq'
        };
        return fetch('http://localhost:3001/login/'+JSON.stringify(data))
            .then(function(res) {
                return res.json();
            }).then(function(json) {
                // expect(json).to.be.an('object');
                expect(json._info).be.an('object');
            });
    });

    it('login test fail', function() {
        let data = {
            email:'123@sdfsdf.com',
            password:'dsaewq'
        };
        return fetch('http://localhost:3001/login/'+JSON.stringify(data))
            .then(function(res) {
                return res.json();
            }).then(function(json) {
                expect(json._info).be.an('object');
            });
    });


    it('regist test ', function() {
        let data = {
            first_name:regist_fname,
            last_name:regist_lname,
            email:regist_email,
            password:regist_pswd
        };
        return fetch('http://localhost:3001/regist/'+JSON.stringify(data))
            .then(function(res) {
                return res.json();
            }).then(function(json) {
                expect(json.info.message).to.equal('success');
            });
    });



    it('regist test fail', function() {
        let data = {
            first_name:'chenchen',
            last_name:'zhizhi',
            email:'r950724@live.cn',
            password:'123'
        };
        return fetch('http://localhost:3001/regist/'+JSON.stringify(data))
            .then(function(res) {
                return res.json();
            }).then(function(json) {
                expect(json.status).to.equal(0);
            });
    });

    it('update test', function() {
        let updateData = {
            userinfo:{
                'id': 144,
                'firstname': 'zzz',
                'lastname': 'sdf',
                'phonenumber': '123',
                'email': 'sdfsf@gmail.com',
                'description': '345erdsf',
                'driver:': null,
                'password': '234'
            }
        };
        return fetch('http://localhost:3001/update/'+JSON.stringify(updateData))
            .then(function(res) {
                return res.json();
            }).then(function(json) {
                expect(json.status).to.equal(1);
            });
    });
})
