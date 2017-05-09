express = require("express");

var orm = require("../config/orm.js");

module.exports = function (app) {
    app.get("/", function (req, res) {
        orm.selectAll(function(data) {
            res.render("index", {result:data});
        });
    });


    app.post("/add", function(req, res) {
        console.log(req.body);
        orm.insertOne(req.body.burger_name, false, req.body.date)
        res.redirect("/");
    })

    app.put("/:id", function(req,res) {
        console.log(req.params.id);
        orm.updateOne(req.params.id);
        res.redirect("/");
    })

    

};