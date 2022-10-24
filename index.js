var http = require("http");
var url = require("url");
var fs = require("fs");

// http
//   .createServer(function (req, res) {
//     fs.readFile("demofile1.html", function (err, data) {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(8080);
// todo
// fs.writeFile("mynewfile3.txt", "Hello content!", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });

// TODO URL Module
// var adr = "http://localhost:8080/default.htmt?year=2017&month=february";
// var q = url.parse(adr, true);
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// todo
// http
//   .createServer(function (req, res) {
//     var q = url.parse(req.url, true);
//     var filename = "." + q.pathname;
//     fs.readFile(filename, function (err, data) {
//       if (err) {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         return res.end("404 Not Found");
//       }
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(3000);

// TODO event
var rs = fs.createReadStream("./mynewfile3.txt");
http
  .createServer(function (req, res) {
    rs.on("open", function () {
      console.log("The file is open");
    });
    res.write("haha");
  })
  .listen(3000);
