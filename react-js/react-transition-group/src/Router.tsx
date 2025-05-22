import { Link, Route, Routes, useLocation } from "react-router-dom";

import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";
import PageD from "./pages/PageD";

import { Fragment } from "react/jsx-runtime";
import { SwitchTransition, CSSTransition, TransitionGroup } from "react-transition-group";

export const Router = () => {
    const location = useLocation();

    return (
        <Fragment>
            <nav className="fixed flex z-10">
                <Link to="a" className="flex items-center justify-center w-10 h-10 ">
                    A
                </Link>
                <Link to="b" className="flex items-center justify-center w-10 h-10 ">
                    B
                </Link>
                <Link to="c" className="flex items-center justify-center w-10 h-10 ">
                    C
                </Link>
                <Link to="d" className="flex items-center justify-center w-10 h-10 ">
                    D
                </Link>
            </nav>
            <TransitionGroup className={"transition-wrapper"}>
                <SwitchTransition mode="in-out">
                    <CSSTransition key={location.pathname} timeout={300} classNames={"navigate-push"}>
                        <Routes location={location}>
                            <Route path="a" element={<PageA />} />
                            <Route path="b" element={<PageB />} />
                            <Route path="c" element={<PageC />} />
                            <Route path="d" element={<PageD />} />
                        </Routes>
                    </CSSTransition>
                </SwitchTransition>
            </TransitionGroup>
        </Fragment>
    );
};
