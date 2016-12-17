// Import / Export HTTP modules
var http = require("http");
var url = require("url");
var fs = require("fs");

var PORT = 8070;
var OPTIPORT = 7000;
var PESIPORT = 7500;

function feelBad(request, response) {
	"use strict";
	var urlParts = url.parse(request.url);

	switch (urlParts.pathname) {
		case "/":
			response.writeHeader(200, {
				"Content-Type": "text/html"
			});
			response.write("Home Page<br>");
			response.write("<a href='/portfolio'>Click Me</a> <br>");
			break;
		case "/portfolio":
			response.writeHeader(200, {
				"Content-Type": "text/html"
			});
			response.write("Portfolio<br>");
			response.write("<a href='/other'>Click Me</a> <br>");
			break;
		case "/other":
			response.writeHeader(200, {
				"Content-Type": "text/html"
			});
			response.write("<h1>And now, for something completely different.</h1><br>");
			response.write("<a href='/zany'>Click This</a> <br>");
			break;
		default:
			console.log("You broke the server.");
	}
	/*
		var insults = ["Your mother was a hampster and your father smelt of elderberries.", "I fart in your general direction.", "Go and boil your bottoms, son of a silly person", "I blow my nose at you", "You do not frighten me"];

		var randomIndex = Math.floor(Math.random() * insults.length);
		response.write(insults[randomIndex] + "\n");
		response.end("Leave and begone.");
	*/
}

function feelGood(request, response) {
	"use strict";
	response.write("You are a good person and people say nice things about you.\n");
	response.end("Makes you feel all warm and fuzzy inside.");
}

function portPrint(port) {
	"use strict";
	console.log("Listening on http://localhost:%s", port);
}

function handleRequest(req, res) {
	"use strict";
	var urlParts = url.parse(req.url);

	switch (urlParts.pathname) {
		case "/index":
			fs.readFile("index.html", function (error, data) {
				if (error) {
					return console.log("Error in FS - index.html");
				}
				res.end(data);
			});
			break;
		case "/food":
			fs.readFile("food.html", function (error, data) {
				if (error) {
					return console.log("Error in FS - food.html");
				}
				res.end(data);
			});
			break;
		case "/movies":
			fs.readFile("movies.html", function (error, data) {
				if (error) {
					return console.log("Error in FS - movies.html");
				}
				res.end(data);
			});
			break;
		case "/frameworks":
			fs.readFile("frameworks.html", function (error, data) {
				if (error) {
					return console.log("Error in FS - frameworks.html");
				}
				res.end(data);
			});
			break;
	}

}

var server = http.createServer(handleRequest);
server.listen(PORT, portPrint(PORT));

/*
var goodServer = http.createServer(feelGood);
goodServer.listen(OPTIPORT, portPrint(OPTIPORT));

var badServer = http.createServer(feelBad);
badServer.listen(PESIPORT, portPrint(PESIPORT));
*/
