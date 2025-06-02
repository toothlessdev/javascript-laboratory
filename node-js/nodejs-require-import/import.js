import moduleA from "./module-a.js";

const condition = true;

if (condition) {
    import("./module-b.js").then((module) => {
        console.log("Module B loaded");
    });
} else {
    import("./module-c.js").then((module) => {
        console.log("Module C loaded");
    });
}

setTimeout(() => console.log("Timers Phase"), 0);
setImmediate(() => console.log("Check Phase"));

console.log("Global E.C. END");

`
Module A
Global E.C. END
Check Phase
Module B
Module B loaded
Timers Phase
`;
