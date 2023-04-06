var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
 
<<<<<<< HEAD
 // Send the response body as "Hello Rajesh.....!"
   response.end('Hello Rajesh....!\n');
=======
 // Send the response body as "Hello Raaaaaaaaajesh.....!"
   response.end('Hello Raaaaaajesh....!\n');
>>>>>>> 0b3ba9e8cc034c5dc56243fcf7c43d73d92815b4

}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
