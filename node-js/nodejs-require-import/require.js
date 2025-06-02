const moduleC = require("./module-c.js");

const condition = true;

if (condition) {
    require("./module-a.js");
} else {
    require("./module-b.js");
}

setTimeout(() => console.log("Timers Phase"), 0);
setImmediate(() => console.log("Check Phase"));

console.log("Global E.C. END");

`
Module C
Module A
Global E.C. END
Timers Phase
Check Phase
`;
