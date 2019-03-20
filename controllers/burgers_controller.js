var express = require("express");

var router = express();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    })
})

router.post("/burgers"), function (req, res) {
    burger.insertOne(["burger_name"], [req.body.burger_name], function (data) {
        res.redirect("/")
    });
}

router.put("/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("new burger", condition);
    burger.updateOne({
        devoured: true
    }, condition, function (data) {
        res.redirect('/');
    });
});

module.exports=router;