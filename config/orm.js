var connection = require("./connection.js");

var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString,function(err, data) {
            if(err) throw err;
            cb(data);
        });
    },
    insertOne: function(name, devoured, date) {
        //flesh out function
        var queryString = "INSERT INTO burgers(burger_name, devoured, date) VALUES(?, ?, ?)";
        connection.query(queryString, [name,devoured,date], function(err, data) {
            if(err) throw err;
            console.log("Data posted");
        })
    },
    updateOne: function(id) {
        //flesh out function
        var queryString = "UPDATE burgers SET devoured = true WHERE ID = ?"
        connection.query(queryString, [id], function(err,data) {
            if(err) throw err;
        })
    }
}

module.exports = orm;