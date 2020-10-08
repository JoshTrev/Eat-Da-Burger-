var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burgerModel = require("../models/burgerModel.js");

// const burgers = [
//     {
//       id: 1,
//       name: "Bacon Burger",
//       devoured: false
//     },
//     {
//       id: 2,
//       name: "Cheese Burger",
//       devoured: false
//     },
//     {
//       id: 3,
//       name: "Double Cheese Burger",
//       devoured: true
//     },
//     {
//       id: 4,
//       name: "Veggie Burger",
//       devoured: true
//     }
//   ];




router.get("/", (req, res) => {
    burgerModel.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log("hbsObject from burgers_controller.js");
        console.log(hbsObject);
        res.render("index", hbsObject);
      });
});


  

//   router.get("/", (req, res) => {
//     res.render("index", {
//       burgers: burgers
//     });
// });









router.get("/api/burgers", (req, res) => {
// MySQL Select retrieves burgers array from DB
  res.json(burgers);
});

router.post("/api/burgers", (req, res) => {
  let newBurger = req.body;
  // MySQL Insert
});

router.put("/api/burgers/:id", (req, res) => {
  const chosen = req.params.id;

  // MySQL Update can update burger devoured false to devoured true where id matches chosen
});






// Export routes for server.js to use.
module.exports = router;