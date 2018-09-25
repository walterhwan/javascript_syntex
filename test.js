const fs = require("fs");

const readJsonFile = filename => {
  return new Promise((fulfill, reject) => {
    fs.readFile(filename, "utf8", (err, res) => {
      if (err) reject(err);
      else fulfill(JSON.parse(res));
    });
  });
};

readJsonFile("test.json").then(res => {
  console.log(res);
});

// const fs = require("fs");

// function readFile(filename, enc) {
//   return new Promise(function(fulfill, reject) {
//     fs.readFile(filename, enc, function(err, res) {
//       if (err) reject(err);
//       else fulfill(res);
//     });
//   });
// }

// function readJSONFile(filename) {
//   return readFile(filename, "utf8").then(function(res) {
//     return JSON.parse(res);
//   });
// }

// console.log("1");

// readJSONFile("test.json")
//   .then(res => {
//     for (let key in res) {
//       console.log("Key: %s", key);
//       console.log("Val: %s", res[key]);
//     }
//   })
//   .catch(err => {
//     console.warn(err);
//   });

// console.log("2");
