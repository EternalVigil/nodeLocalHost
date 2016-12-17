// Import / Export HTTP modules
var http = require("http");
var PORT = 8070;
var OPTIPORT = 7000;
var PESIPORT = 7500;

function handleRequest(request, response) {
    "use strict";
    response.write("Test additional commands.\n");
    response.end("It Works.\nPath hit: " + request.url);
}

function feelBad(request, response) {
    "use strict";

    var insults = ["Your mother was a hampster and your father smelt of elderberries.", "I fart in your general direction.", "Go and boil your bottoms, son of a silly person", "I blow my nose at you", "You do not frighten me"];

    var randomIndex = Math.floor(Math.random() * insults.length);
    response.write(insults[randomIndex] + "\n");
    response.end("Leave and begone.");

}

function feelGood(request, response) {
    "use strict";
    response.write("You are a good person and people say nice things about you.\n");
    response.end("Makes you feel all warm and fuzzy inside.");
}

function portPrint(listenPort) {
    "use strict";
    console.log("Listening on http://localhost:%s", listenPort);
}

var goodServer = http.createServer(feelGood);
goodServer.listen(OPTIPORT, portPrint(OPTIPORT));

var badServer = http.createServer(feelBad);
badServer.listen(PESIPORT, portPrint(PESIPORT));