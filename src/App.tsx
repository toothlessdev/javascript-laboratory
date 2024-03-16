import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Page } from "./pages/Page";
import { Card } from "./components/display/Card";
import { css } from "@emotion/react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Card></Card>

            <div
                css={css`
                    display: block;

                    margin: 10px 0px;
                    padding: 10px;
                    border: 1px solid red;
                    border-radius: 10px;
                    color: red;
                `}
            >
                @emotion/react config test
            </div>
        </>
    );

    // return (
    //   <>
    //     <div>
    //       <a href="https://vitejs.dev" target="_blank">
    //         <img src={viteLogo} className="logo" alt="Vite logo" />
    //       </a>
    //       <a href="https://react.dev" target="_blank">
    //         <img src={reactLogo} className="logo react" alt="React logo" />
    //       </a>
    //     </div>
    //     <h1>Vite + React</h1>
    //     <div className="card">
    //       <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    //       <p>
    //         Edit <code>src/App.tsx</code> and save to test HMR
    //       </p>
    //     </div>
    //     <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    //   </>
    // );
}

export default App;
