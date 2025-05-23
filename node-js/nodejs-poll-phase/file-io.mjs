import fs from "fs";

console.log("Start reading file..."); // global e.c.

const readFileCallback = (err, data) => {
    console.log(`readFileCallback() : ${data}`);
};

const file = "./test.txt";

fs.readFile(file, readFileCallback);

for (let i = 0; i < 1e8; i++);

console.log("End reading file...");
