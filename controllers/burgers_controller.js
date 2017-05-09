var express = require("express");
var db = require("../models")

module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Burger.findAll({}).then(function(dbBurger) {
            res.json(dbBurger);
        });
    });


    app.post("/add", function(req, res) {
    })

    app.put("/:id", function(req,res) {
    })

    

};