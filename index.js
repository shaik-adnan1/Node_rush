const fs = require("fs");
const http = require("http");

// // Blocking synchronous
// /*
// const gitRReadme = fs.readFileSync("./README.md", "utf-8");
// console.log(gitRReadme);

// const textOut = `this is what we know about the current project ${gitRReadme}. \n Create on ${Date.now()}`;
// fs.writeFileSync("./testREADME.md", textOut);
// console.log("file written");
// */
// // Non - blocking Asynchronous
// fs.readFile("./starttttt.md", "utf-8", (err, data1) => {
//   if (err) console.log("error!");
//   fs.readFile(`./${data1}`, "utf-8", (err, data2) => {
//     // console.log(data2);
//     fs.writeFile(`./output.md`, `${data1} \n ${data2}`, "utf-8", err => {
//       console.log("your file has been written");
//       fs.readFile(`./output.md`, "utf-8", (err, data) => {
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
  console.log(req)
  res.end("hello from the server");
  // console.log(req)
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to requests on port 8000");
}); // localhost default -- 127.0.0.1
// server.listen(8001, "127.0.0.1", () => {
//   console.log("listening to requests on port 8000");
// }); // localhost default -- 127.0.0.1
