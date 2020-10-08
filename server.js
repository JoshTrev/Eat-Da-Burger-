var express = require("express");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const burgers = [
  {
    id: 1,
    name: "Bacon Burger",
    devoured: false
  },
  {
    id: 2,
    name: "Cheese Burger",
    devoured: false
  },
  {
    id: 3,
    name: "Double Cheese Burger",
    devoured: true
  },
  {
    id: 4,
    name: "Veggie Burger",
    devoured: true
  }
];

app.get("/", (req, res) => {
    res.render("index", {
      burgers: burgers
    });
});

app.put("/api/burgers/:id", (req, res) => {
    const chosen = req.params.id;

    // MySQL can update burger devoured false to devoured true where id matches chosen
})

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
