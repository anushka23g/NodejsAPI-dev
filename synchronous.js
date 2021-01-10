const fs = require("fs");

const fileName = "a.txt";

const data = fs.readFileSync(fileName);
console.log(data.toString());

console.log(" nodejs sync??");
