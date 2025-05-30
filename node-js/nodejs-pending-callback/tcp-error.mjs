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

/*

Starting TCP server...
Connected to 127.0.0.1:80
Connection error: Error: connect ECONNREFUSED 192.168.35.1:65535
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1636:16) {
  errno: -61,
  code: 'ECONNREFUSED',
  syscall: 'connect',
  address: '192.168.35.1',
  port: 65535
}

*/

`
   ┌───────────────────────────┐
   │        global e.c.        │
   └─────────────┬─────────────┘
                 |
   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
`;
