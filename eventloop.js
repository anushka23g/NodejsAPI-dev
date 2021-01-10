const fs = require("fs");

const fileName = "a.txt";

fs.watch(fileName, () => {
  console.log("File changed!");
});
