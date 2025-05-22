import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";
import { RouteTransition } from "./animation/RouteTransition";

function App() {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
}

export default App;
