const fs = require('fs');
const superagnet = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) => {
  console.log(data);

  superagnet
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, res) => {
      console.log(res.body.message);

      fs.writeFile('dog-img.txt', res.body.message, (err) => {
        console.log('random dog image saved to file');
      });
    });
});
