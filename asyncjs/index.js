const fs = require('fs');
const superagnet = require('superagent');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err)
        reject(`This is and error from promise! Couldn't find the file😩`);
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject(`There was an error while writing the file`);
      resolve('Success');
    });
  });
};

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);

    console.log(`Breed: ${data}`);

    const res = await superagnet.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );

    console.log(res.body.message);

    await writeFilePro('dog-img.txt', res.body.message);
    console.log(`File is written`);
  } catch (err) {
    console.log(err);
  }
  return '2: Ready 🐶';
};

(async () => {
  try {
    console.log(`1: Will get dog pics`);
    const x = await getDogPic();
    console.log(`got the dog pic: ${x}`)

    console.log(`3: Done getting dog pics`);
  } catch (err) {
    console.log('Error 💥');
  }
})();

// console.log(`1: Will get dog pics`)
// getDogPic().then(x => {
//   console.log(x)
//   console.log(`3: Done getting dog pics`);
// }).catch(err => {
//   console.log('Error 💥')
// })

// readFilePro(`${__dirname}/doggg.txt`)
//   .then((data) => {
//     return superagnet.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then((res) => {
//     console.log(res.body.message);

//     writeFilePro('dog-img.txt', res.body.message)
//   })
//   .then(() => {
//     console.log(`random dog image save to file`)
//   })
//   .catch((err) => {
//     console.log(`This is the error ${err}`);
//   });

// fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) => {
//   console.log(data);

//
// });
