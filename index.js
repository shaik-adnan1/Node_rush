const fs = require("fs");
const http = require("http");
const url = require("url");

// // Blocking synchronous
// /*
// const gitRReadme = fs.readFileSync("./README.md", "utf-8");
// console.log(gitRReadme);

// const textOut = `this is what we know about the current project ${gitRReadme}. \n Create on ${Date.now()}`;
// fs.writeFileSync("./testREADME.md", textOut);
// console.log("file written");
// */
// // Non - blocking Asynchronous
// fs.readFile("./txt/start.md", "utf-8", (err, data1) => {
//   if (err) console.log("error!");
//   fs.readFile(`./${data1}`, "utf-8", (err, data2) => {
//     // console.log(data2);
//     fs.writeFile(`./txt/output.md`, `${data1} \n ${data2}`, "utf-8", err => {
//       console.log("your file has been written");
//       fs.readFile(`./txt/output.md`, "utf-8", (err, data) => {
//         console.log(data);
//       });
//     });
//   });
//   // console.log(data1);
// });
// console.log("reading file");

///////////////////////////////////////////
// server

const server = http.createServer((req, res) => {
  console.log(req.url);

  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the overview section");
  } else if (pathName === "/products") {
    res.end("this is the product section");
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html'
    });
    res.end("<h1>page not found</h1>");
  }

  // console.log(req)
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to requests on port 8000");
}); // localhost default -- 127.0.0.1
