import "./sub-module1.mjs";

setTimeout(() => console.log("1"), 1);

for (let i = 0; i < 1e9; i++);

console.log("2");

import "./sub-module2.mjs";

import("./sub-module3.mjs");
