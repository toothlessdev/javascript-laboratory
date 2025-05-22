function allocateTemporaries() {
    for (let i = 0; i < 1e5; i++) {
        const temp = { x: i, y: i * 2 };
    }
}

setInterval(allocateTemporaries, 100);
