var express = require('express');
var app = express();

// Main Route
app.get("/", function(req, res) {
    res.send("Hey there, welcome to my assignment!");
});

// Function to check animal type
function checkAnimal(animalType) {
    if (animalType === "pig") {
        return "The pig says 'Oink'";
    }
    if (animalType === "cow") {
        return "The cow says 'Moo'";
    }
    if (animalType === "dog") {
        return "The pig says 'Woof Woof!'";
    }
    else {
        return "Sorry, animal not recognized. Try: Pig, Cow, or Dog!";
    }
};

// Speak Route
app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal.toLowerCase();
    // support 3 animals: pig, cow, dog
    res.send(checkAnimal(animal));
});

// Function to generate repeated string
function getRepeatedString(str, num) {
    if (str.length > 0 && Number(num) > 0) {
        var displayString = "";
        for (var i = 0; i < (Number(num); i++) {
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
