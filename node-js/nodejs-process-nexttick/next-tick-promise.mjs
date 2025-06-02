function promise(cb) {
    return new Promise((resolve, reject) => {
        resolve(cb);
    });
}

function nextTickPromise(cb) {
    process.nextTick(cb);
}

// nextTickPromise(() => console.log("This is a nextTick callback"));
promise(() => console.log("This is a promise callback"));

console.log("Global E.C. ends here");
