const fs = require("fs");

const fileName = "a.txt";

fs.readFile(fileName, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

console.log(" nodejs async??");
//  it is so as processing different events
// take different amounts of time
// reading a file takes more time than
// printing just to console
