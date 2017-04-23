var express = require('express');
var app = express();

// Main Route
app.get("/", function(req, res) {
    res.send("Hey there, welcome to my assignment!");
});

// Speak Route
app.get("/speak/:animal", function(req, res) {
    // Sounds dictionary
    var sounds = {
      pig: "Oink",
      cow: "Moo",
      dog: "Woof Woof!",
      cat: "I hate you human",
      goldfish: "Blurblerp"
    };
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    if (!sounds[animal]) {
        res.send("Unknown animal: " + animal);
    } else {
        res.send("The " + animal + " says \"" + sound + "\"");
    }
});

// Function to generate repeated string
function getRepeatedString(str, num) {
    var ensureNumber = Number(num);
    if (ensureNumber > 0) {
        var displayString = "";
        for (var i = 0; i < ensureNumber; i++) {
            displayString += str + " ";
        }
        return displayString;
    } else {
        return "ERROR: Number of repetitions must be greater than zero.";
    }
};

// Repeat Route
app.get("/repeat/:string/:count", function(req, res) {
    var string = req.params.string;
    var count = Number(req.params.count);
    // Display the string, count number of times
    res.send(getRepeatedString(string, count));
});

// Splat Route
app.get("*", function(req, res) {
    res.send("Sorry, page not found... What are you doing with your life?");
});

// Server config settings
var config = {};
config.port = 3000;
config.host = "localhost";

// Start server
app.listen(config.port, config.host, function() {
    console.log("Server started on port: " + config.port);
});
