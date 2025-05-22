import net from "net";

console.log("Starting TCP server...");

const fail = new net.Socket();
const success = new net.Socket();

fail.connect(65535, "192.168.35.1", () => {
    console.log("Connected to 192.168.35.1:65535");
});

success.connect(80, "127.0.0.1", () => {
    console.log("Connected to 127.0.0.1:80");
});

fail.on("error", (err) => {
    console.error("Connection error:", err);
});

success.on("error", (err) => {
    console.error("Connection error:", err);
});

setTimeout(() => console.log("Timeout"), 1); // timers phase

for (let i = 0; i < 1e10; i++); // global e.c. execution phase

console.log("End of script");

/*
실행 결과 

Starting TCP server...  
----------> global e.c. execution phase

End of script
----------> global e.c. execution phase

Timeout
----------> timers phase

Connected to 127.0.0.1:80
----------> poll phase

Connection error: Error: connect ECONNREFUSED 192.168.35.1:65535
----------> pending callbacks phase
 */
