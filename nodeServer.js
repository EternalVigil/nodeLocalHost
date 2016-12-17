// Import / Export HTTP modules
var http = require("http");
var PORT = 8070;
var OPTIPORT = 7000;
var PESIPORT = 7500;

function handleRequest (request, response){
	"use strict";
	response.write("Test additional commands.\n");
	response.end("It Works.\nPath hit: " + request.url);
}

function feelBad(request, response){
	"use strict";
	response.write("Your mother was a hampster and your father smelt of elderberries.\n");
	response.end("Now go away or I shall taunt you a second time.");
}

function feelGood(request, response){
	"use strict";
	response.write("You are a good person and people say nice things about you.\n");
	response.end("Makes you feel all warm and fuzzy inside.");
}

function portPrint(listenPort){
	"use strict";
	console.log("Listening on http://localhost:%s", listenPort);
}

/*
var server = http.createServer(handleRequest);
server.listen(PORT, function(){
	"use strict";
	console.log("Server is listening on http://localhost:%s", PORT);
});
*/
var goodServer = http.createServer(feelGood);
goodServer.listen(OPTIPORT, portPrint(OPTIPORT));

var badServer = http.createServer(feelBad);
badServer.listen(PESIPORT, portPrint(PESIPORT));