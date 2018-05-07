var EventEmitter = require('events').EventEmitter;

class Store_MessageList extends EventEmitter {
    constructor() {
        super();
        this.allData = null;
    }

    getAllData(id,callback) {
        var self = this;
        fetch(
            "/get-userinfo/"+id
        )
            .then(function(res) {
                if (res.ok) {
                    res.json().then(function(data) {
                        self.allData = data;
                        callback(self.allData);
                    });
                } else {
                    console.log("Looks like the response wasn't perfect, got status", res.status);
                }
            }, function(e) {
                console.log("Fetch failed!", e);
            });
    }
    login(data,callback){
        var self = this;
        fetch(
            "/login/"+JSON.stringify(data)
        )
            .then(function(res) {
                debugger
                if (res.ok) {
                    res.json().then(function(data) {
                        if(data._info==undefined || data._info=={}){
                            self.allData = null;
                        }else{
                            self.allData = data;
                        }
                        callback(self.allData);
                    });
                } else {
                    console.log("Looks like the response wasn't perfect, got status", res.status);
                }
            }, function(e) {
                console.log("Fetch failed!", e);
            });
    }
    regist(data,callback){
        var self = this;
        fetch(
            "/regist/"+JSON.stringify(data)
        )
            .then(function(res) {
                if (res.ok) {
                    res.json().then(function(data) {
                        self.allData = data;
                        callback(self.allData);
                    });
                } else {
                    console.log("Looks like the response wasn't perfect, got status", res.status);
                }
            }, function(e) {
                console.log("Fetch failed!", e);
            });
    }
    update(data,callback){
        var self = this;
        debugger
        fetch(
            "/update/"+JSON.stringify(data)
        )
            .then(function(res) {
                if (res.ok) {
                    res.json().then(function(data) {
                        self.allData = data;
                        callback(self.allData);
                    });
                } else {
                    console.log("Looks like the response wasn't perfect, got status", res.status);
                }
            }, function(e) {
                console.log("Fetch failed!", e);
            });
    }
    addListing(data,callback){
        var self = this;
        fetch(
            "/addListing/"+JSON.stringify(data)
        )
            .then(function(res) {
                if (res.ok) {
                    res.json().then(function(data) {
                        self.allData = data;
                        callback(self.allData);
                    });
                } else {
                    console.log("Looks like the response wasn't perfect, got status", res.status);
                }
            }, function(e) {
                console.log("Fetch failed!", e);
            });
    }
}

module.exports = new Store_MessageList();
