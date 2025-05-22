import { useEffect, useRef, useState } from "react";
import { Timer } from "js-timer";
import "./App.css";

function App() {
    const [tickCount, setTickCount] = useState<number>(0);
    const [remaining, setRemaining] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const timerRef = useRef<Timer | null>(null);

    const INTERVAL = 1000; // 1초 간격

    useEffect(() => {
        const timer = new Timer(INTERVAL, () => {
            setTickCount((prev) => prev + 1);
        });

        timerRef.current = timer;

        const id = setInterval(() => {
            if (timerRef.current) {
                setRemaining(timerRef.current.getRemainingTime());
            }
        }, 100);

        return () => {
            clearInterval(id);
            timer.stop();
        };
    }, []);

    const handleStart = () => {
        if (!timerRef.current || isRunning) return;
        timerRef.current.start();
        setIsRunning(true);
    };

    const handlePause = () => {
        if (!timerRef.current || !isRunning) return;
        timerRef.current.pause();
        setIsRunning(false);
    };

    const handleResume = () => {
        if (!timerRef.current || isRunning) return;
        timerRef.current.resume();
        setIsRunning(true);
    };

    const handleReset = () => {
        if (!timerRef.current) return;
        timerRef.current.stop();
        setIsRunning(false);
        setTickCount(0);
        setRemaining(INTERVAL);
    };

    return (
        <div className="App">
            <h1>🕒 Custom Timer</h1>
            <p>Tick Count: {tickCount}</p>
            <p>Remaining Time: {remaining}ms</p>

            <div className="buttons">
                {!isRunning && tickCount === 0 && <button onClick={handleStart}>Start</button>}
                {isRunning && <button onClick={handlePause}>Pause</button>}
                {!isRunning && tickCount > 0 && <button onClick={handleResume}>Resume</button>}
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}

export default App;
