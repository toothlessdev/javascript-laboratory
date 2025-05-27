let name;

function printName() {
    console.log(`Name: ${name}`);
}

process.nextTick(() => printName());

name = "John Doe";
