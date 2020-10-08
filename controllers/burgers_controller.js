var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burgerModel = require("../models/burgerModel.js");

router.get("/", (req, res) => {
    burgerModel.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log("hbsObject from burgers_controller.js");
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burgerModel.create("burger_name", [req.body.burger_name], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgerModel.update(
        {
            devoured: 1
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});

// Export routes for server.js to use.
module.exports = router;