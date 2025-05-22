import { useState } from "react";
import React from "react";

import "./App.css";

export default function App() {
    return (
        <div>
            <h1>Counter</h1>
            <Counter />
            <input type="text" />
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="card" data-name="Counter">
            <Count count={count} />
            <button onClick={() => setCount((count) => count + 1)}>Increse</button>
        </div>
    );
}

function Count({ count }) {
    return (
        <div>
            <p>count : {count}</p>
            <Footer />
        </div>
    );
}

const Footer = React.memo(function Footer() {
    return (
        <div>
            <p>React Rendering Process</p>
        </div>
    );
});
