const fs = require("fs");

// Blocking synchronous
/*
const gitRReadme = fs.readFileSync("./README.md", "utf-8");
console.log(gitRReadme);

const textOut = `this is what we know about the current project ${gitRReadme}. \n Create on ${Date.now()}`;
fs.writeFileSync("./testREADME.md", textOut);
console.log("file written");
*/
// Non - blocking Asynchronous
fs.readFile("./README.md", "utf-8", (err, data1) => {
  fs.readFile(`./${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
  });
});
console.log("reading file");
