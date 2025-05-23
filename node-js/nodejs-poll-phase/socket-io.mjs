import net from "net";

console.log("start");

// net.Socket() 생성 시 libuv를 통해 커널에 소켓 생성 요청
// libuv는 epoll 등 이벤트 감시자를 내부적으로 관리함
const success = new net.Socket();

// connect() 호출 시 TCP handshake는 OS 커널에서 처리되고,
// libuv의 poll phase에서 연결 완료 이벤트를 감지함
success.connect(80, "www.google.com", () => {
    console.log("Connected to server");
});

success.on("error", (err) => {
    console.error("Socket error:", err);
});
