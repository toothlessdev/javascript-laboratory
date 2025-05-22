const net = require("net");

// Create a server object
const server = net.createServer((socket) => {
    console.log("Client connected");

    socket.on("data", (data) => {
        console.log(`Received data: ${data}`);
        socket.write("Echo: " + data);
    });

    socket.on("end", () => {
        console.log("Client disconnected");
    });

    socket.on("error", (err) => {
        console.error("Socket error:", err);
    });
});

server.listen(3000, "0.0.0.0", () => {
    console.log("Server listening on port 3000");
});

server.on("error", (err) => {
    console.error("Server error:", err);
});

setTimeout(() => server.close(), 30000);

console.log("start");

console.log("end");
