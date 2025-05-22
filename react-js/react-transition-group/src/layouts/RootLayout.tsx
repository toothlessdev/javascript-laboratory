import { Link, Outlet, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Fragment } from "react/jsx-runtime";

export const RootLayout = () => {
    const location = useLocation();

    return (
        <Fragment>
            <nav className="flex">
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
            <SwitchTransition mode="in-out">
                <CSSTransition key={location.key} timeout={500} classNames={"next"}>
                    <Outlet />
                </CSSTransition>
            </SwitchTransition>
        </Fragment>
    );
};
