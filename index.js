const fs = require("fs");
const http = require("http");
const { json } = require("node:stream/consumers");
const url = require("url");

const slugify = require("slugify");

const replaceTemplate = require("./modules/replaceTemplate");

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

const data = fs.readFileSync(`${__dirname}/dev_data/data.json`, "utf-8");
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);

const dataObj = JSON.parse(data);

const slugs = dataObj.map(el => slugify(el.productName, { lower: true }));
console.log(slugs);
// reading the templates

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // Overview Page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(404, {
      "Content-type": "text/html",
    });

    const cardsHtml = dataObj
      .map(cur => replaceTemplate(tempCard, cur))
      .join("");

    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);

    // console.log(cardsHtml);
    res.end(output);

    // Product page
  } else if (pathname === "/product") {
    res.writeHead(404, {
      "Content-type": "text/html",
    });

    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);

    res.end(output);

    // Api Page
  } else if (pathname === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);

    // 404 Page
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Kaizoku not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to requests on port 8000");
}); // localhost default -- 127.0.0.1
